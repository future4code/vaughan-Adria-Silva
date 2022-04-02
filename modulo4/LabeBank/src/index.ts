import express, {Express, Request, Response} from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import { Client, dataBank, OPERATION, Transaction } from './data';
import { cpfFormatValidate, findCpf } from './cpfValidate';
import { dateFormatValidate, isMinor } from './dateValidate';

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
            res.status(errorCode).send({message: "Erro na requisição"});
        }
        res.status(errorCode).send({message: error.message});
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

        res.status(200).send({saldo: balance});
    } catch (error: any) {
        if (errorCode === 400) {
            res.status(errorCode).send({message: "Erro na requisição"});
        };
        res.status(errorCode).send({message: error.message});
    };
});

app.post("/users", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const {name, cpf, birth} = req.body;

        if (!name || !cpf || !birth) {
            errorCode = 422;
            throw new Error("Informações incompletas");
        }

        dateFormatValidate(birth);
        isMinor(birth);

        cpfFormatValidate(cpf, dataBank);
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
            error.message === "Data inválida" || 
            error.message === "É necessário ter mais de 18 anos para abrir uma conta no LabeBank" || 
            error.message === "CPF não está no formato solicitado: XXX.XXX.XXX-XX" || 
            error.message === "Algun(s) caractere(s) do CPF não é (são) não numérico(s)" || 
            error.message === "A data não está no formato solicitado: DD / MM / AAAA" || 
            error.message === "Algum(s) caractere(s) do dia, mês e / ou ano da data não é (são) não numérico(s)" 
        ) {
            res.status(422).send({message: error.message});
        };

        if (errorCode === 400) {
            res.status(errorCode).send({message: "Erro na requisição"})
        };

        res.status(errorCode).send({message: error.message});
    };
});

app.put("/users", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const {name, cpf, addValue} = req.body;

        if (!name || !cpf || !addValue) {
            errorCode = 422;
            throw new Error("Informações incompletas")
        }
        cpfFormatValidate(cpf, dataBank);
        const isClient = findCpf(cpf, dataBank);
        if (!isClient) {
            errorCode = 404;
            throw new Error("CPF informado não é cadastrado no LabeBank");
        };

        if (name !== isClient.name) {
            errorCode = 409;
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

                const allStatment = client.statment;
                allStatment.push(newStatment);
                return {...client, statment: allStatment};
            }
        })

        res.status(200).send(updateDataBank);

    } catch (error: any) {
        if (
            error.message === "CPF não está no formato solicitado: XXX.XXX.XXX-XX" || 
            error.message === "Algun(s) caractere(s) do CPF não é (são) não numérico(s)"
        ) {
            res.status(422).send({message: error.message});
        };

        if (errorCode === 400) {
            res.status(errorCode).send({message: "Erro na requisição"});
        };

        res.status(errorCode).send({message: error.message});
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

