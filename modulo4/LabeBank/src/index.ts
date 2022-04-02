import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import { Client, dataBank, OPERATION, Transaction } from './data';
import { cpfFormatValidate, findCpf } from './cpfValidate';
import { dateFormatValidate, isMinor, pastDate } from './dateValidate';

const app: Express = express();

app.use(express.json());
app.use(cors());

// ENDPOINTS
app.get("/users", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        res.status(200).send(dataBank);
    } catch (error: any) {
        if (errorCode === 400) {
            res.status(errorCode).send({ message: "Erro na requisição" });
        }
        res.status(errorCode).send({ message: error.message });
    };
});

app.get("/users/:cpf", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const cpf: string = req.params.cpf
        const client: Client | undefined = dataBank.find(client => client.cpf === cpf);

        if (!client) {
            errorCode = 404;
            throw new Error("Cliente não cadastrado");
        }
        const balance: number = client.balance;

        res.status(200).send({ saldo: balance });
    } catch (error: any) {
        if (errorCode === 400) {
            res.status(errorCode).send({ message: "Erro na requisição" });
        };
        res.status(errorCode).send({ message: error.message });
    };
});

app.post("/users", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const { name, cpf, birth } = req.body;

        if (!name || !cpf || !birth) {
            errorCode = 422;
            throw new Error("Informações incompletas");
        }

        dateFormatValidate(birth);
        isMinor(birth);

        cpfFormatValidate(cpf);
        const isClient = findCpf(cpf, dataBank);
        if (isClient) {
            errorCode = 409;
            throw new Error("CPF informado já é cadastrado no LabeBank");
        };

        const newClient: Client = {
            name,
            cpf,
            birth,
            balance: 0,
            statment: []
        };

        dataBank.push(newClient);

        res.status(201).send(dataBank)
    } catch (error: any) {
        if (
            error.message === "A data não está no formato solicitado: DD / MM / AAAA" ||
            error.message === "Algum(s) caractere(s) do dia, mês e / ou ano da data não é (são) não numérico(s)" ||
            error.message === "Data inválida" ||
            error.message === "É necessário ter mais de 18 anos para abrir uma conta no LabeBank" ||
            error.message === "CPF não está no formato solicitado: XXX.XXX.XXX-XX" ||
            error.message === "Algun(s) caractere(s) do CPF não é (são) não numérico(s)"
        ) {
            res.status(422).send({ message: error.message });
        };

        if (errorCode === 400) {
            res.status(errorCode).send({ message: "Erro na requisição" })
        };

        res.status(errorCode).send({ message: error.message });
    };
});


app.put("/users", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const { name, cpf, addValue } = req.body;

        if (!name || !cpf || !addValue) {
            errorCode = 422;
            throw new Error("Informações incompletas")
        }
        cpfFormatValidate(cpf);
        const isClient = findCpf(cpf, dataBank);
        if (!isClient) {
            errorCode = 404;
            throw new Error("CPF informado não é cadastrado no LabeBank");
        };

        if (name !== isClient.name) {
            errorCode = 401;
            throw new Error("Nome informado não confere com o cadastrado");
        }

        const updateDataBank = dataBank.map(client => {
            if (client.cpf !== isClient.cpf) {
                return client;
            } else {
                const nowDate = new Date().toLocaleString();
                const splitNowDate = nowDate.split(" ");
                const newStatment: Transaction = {
                    value: addValue,
                    date: splitNowDate[0],
                    description: OPERATION.ADICIONAR
                };

                const newBalance: number = client.balance + addValue;

                const allStatment = client.statment;
                allStatment.push(newStatment);
                return { ...client, balance: newBalance, statment: allStatment };
            }
        })

        res.status(200).send(updateDataBank);

    } catch (error: any) {
        if (
            error.message === "CPF não está no formato solicitado: XXX.XXX.XXX-XX" ||
            error.message === "Algun(s) caractere(s) do CPF não é (são) não numérico(s)"
        ) {
            res.status(422).send({ message: error.message });
        };

        if (errorCode === 400) {
            res.status(errorCode).send({ message: "Erro na requisição" });
        };

        res.status(errorCode).send({ message: error.message });
    };
});

app.post("/users/payment", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        let { cpf, value, description, date } = req.body;
        if (!cpf || !description || !value) {
            errorCode = 422;
            throw new Error("Informações incompletas")
        }

        cpfFormatValidate(cpf);
        const isClient = findCpf(cpf, dataBank);
        if (!isClient) {
            errorCode = 404;
            throw new Error("CPF informado não é cadastrado no LabeBank");
        };

        if (typeof value !== "number" || value <= 0) {
            errorCode = 422;
            throw new Error("Valor do pagamento informado deve ser numérico e maior que zero");
        };

        if (value > isClient.balance) {
            errorCode = 403;
            throw new Error("Valor do pagamento ultrapassa o saldo");
        };

        if (typeof description !== "string" || description.toUpperCase() !== "PAGAMENTO") {
            errorCode = 422;
            throw new Error("Descrição da operação é inválida. Para essa operação, informar apenas: PAGAMENTO");
        }

        if (!date) {
            const getDate = new Date().toLocaleString();
            const splitDate = getDate.split(" ")
            date = splitDate[0];
        } else {
            dateFormatValidate(date);
            const isPast = pastDate(date);
            if (isPast > 0) {
                errorCode = 422;
                throw new Error("A data informada do pagamento já passou");
            }
        };

        const updateDataBankStatement: Client[] = dataBank.map(client => {
            if (client.cpf !== cpf) {
                return client;
            } else {
                const allStatment = client.statment;

                const newStatment: Transaction = {
                    value,
                    date,
                    description: OPERATION.PAGAMENTO
                };

                allStatment.push(newStatment);

                return { ...client, statment: allStatment };
            }
        });

        res.status(201).send(updateDataBankStatement);

    } catch (error: any) {
        if (
            error.message === "CPF não está no formato solicitado: XXX.XXX.XXX-XX" ||
            error.message === "Algun(s) caractere(s) do CPF não é (são) não numérico(s)" ||
            error.message === "A data não está no formato solicitado: DD / MM / AAAA" ||
            error.message === "Algum(s) caractere(s) do dia, mês e / ou ano da data não é (são) não numérico(s)" ||
            error.message === "Data inválida"
        ) {
            res.status(422).send({ message: error.message });
        };

        if (errorCode === 400) {
            res.status(errorCode).send({ message: "Erro na requisição" });
        };

        res.status(errorCode).send({ message: error.message });
    };
});

app.put("/users/payment", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const cpf: string = req.body.cpf;
        if (!cpf) {
            errorCode = 401;
            throw new Error("Não foi informado um cpf")
        }
        cpfFormatValidate(cpf);
        const isClient = findCpf(cpf, dataBank);
        if (!isClient) {
            errorCode = 404;
            throw new Error("CPF informado não é cadastrado no LabeBank");
        };

        const updatePaymentsBalance = dataBank.map(client => {
            if (client.cpf !== cpf) {
                return client;
            } else {
                let discount: number = 0;
                const statment: Transaction[] = client.statment;

                for (let i: number = 0; i < statment.length; i++) {
                    let isPast = pastDate(statment[i].date);
                    if (isPast > 0) {
                        if (statment[i].description === OPERATION.TRANSFERENCIARECEBIDA) {
                            discount += statment[i].value;
                        } else {
                            discount -= statment[i].value;
                        }
                    };
                };

                return { ...client, balance: client.balance + discount }
            }
        });

        res.status(200).send(updatePaymentsBalance)

    } catch (error: any) {
        if (
            error.message === "CPF não está no formato solicitado: XXX.XXX.XXX-XX" ||
            error.message === "Algun(s) caractere(s) do CPF não é (são) não numérico(s)"
        ) {
            res.status(422).send({ message: error.message });
        };

        if (errorCode === 400) {
            res.status(errorCode).send({ message: "Erro na requisição" });
        };

        res.status(errorCode).send({ message: error.message });
    };
});

app.post("/users/transfer", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const {cpfPayer, namePayer, value, cpfReceiver, nameReceiver} = req.body;
        if(!cpfPayer || !namePayer || !value || !cpfReceiver || !nameReceiver) {
            errorCode = 422;
            throw new Error("Informações incompletas")
        };

        cpfFormatValidate(cpfPayer);
        const clientPayer = findCpf(cpfPayer, dataBank);
        if (!clientPayer) {
            errorCode = 404;
            throw new Error("CPF informado não é cadastrado no LabeBank");
        } else {
            if (clientPayer.name !== namePayer) {
                errorCode = 401;
                throw new Error("Nome do pagador não confere com o cadastrado");
            }
        }

        cpfFormatValidate(cpfPayer);
        const clientReceiver = findCpf(cpfReceiver, dataBank);
        if (!clientReceiver) {
            errorCode = 404;
            throw new Error("CPF informado não é cadastrado no LabeBank");
        } else {
            if (clientReceiver.name !== nameReceiver) {
                errorCode = 401;
                throw new Error("Nome do pagador não confere com o cadastrado");
            }
        }

        if (typeof value !== "number" || value <= 0) {
            errorCode = 422;
            throw new Error("Valor do pagamento informado deve ser numérico e maior que zero");
        };

        if (value > clientPayer.balance) {
            errorCode = 403;
            throw new Error("Valor do pagamento ultrapassa o saldo");
        };

        const getDate: string = new Date().toLocaleString();
        const splitDate: string[] = getDate.split(" ")
        const date: string = splitDate[0];

        const newStatmentPayer: Transaction = {
            value,
            date,
            description: OPERATION.TRANSFERENCIAPAGA
        }
        const newStatmentReceiver: Transaction = {
            value,
            date,
            description: OPERATION.TRANSFERENCIARECEBIDA
        }

        const updateDataBankStatement: Client[] = dataBank.map(client => {
            if (client.cpf !== cpfPayer && client.cpf !== cpfReceiver) {
                return client;
            } else if (client.cpf === cpfPayer) {
                const allStatment: Transaction[] = client.statment;
                allStatment.push(newStatmentPayer);
                return {...client, statment: allStatment};
            } else {
                const allStatment: Transaction[] = client.statment;
                allStatment.push(newStatmentReceiver);
                return {...client, statment: allStatment};
            }
        });

        res.status(201).send(updateDataBankStatement);
    } catch (error: any) {
        if (
            error.message === "CPF não está no formato solicitado: XXX.XXX.XXX-XX" ||
            error.message === "Algun(s) caractere(s) do CPF não é (são) não numérico(s)"
        ) {
            res.status(422).send({ message: error.message });
        };

        if (errorCode === 400) {
            res.status(errorCode).send({ message: "Erro na requisição" });
        };

        res.status(errorCode).send({ message: error.message });
    };
});


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    };
});

