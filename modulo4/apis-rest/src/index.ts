import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import { User, users } from './data';

const app: Express = express();

app.use(express.json());
app.use(cors());

// ENDPOINTS
// Exercício 1
app.get("/users", (req: Request, res: Response) => {
    let errorCode: number = 500;
    try {
        const name: string = req.query.name as string;
        const type: string = req.query.type as string;
        if (name) {
            const user: User | undefined = users.find(user => user.name === name);
            if (!user) {
                errorCode = 404;
                throw new Error("Usuário(a) não encontrado(a).");
            };

            res.status(200).send(user);
        };

        if (type) {
            if (type !== "ADMIN" && type !== "NORMAL") {
                errorCode = 422;
                console.log("entrou");
                throw new Error("Valor de type inválido. É necessário que type seja ADMIN ou NORMAL");
            };

            const filteredList = users.filter(user => user.type === type);
            res.status(200).send(filteredList);
        }

        res.status(200).send(users);

    } catch (error: any) {
        if (errorCode === 500) {
            res.status(errorCode).send({ message: "Erro no servidor" })
        }
        res.status(errorCode).send({ message: error.message })
    };
});

// Exercício 2
// app.get("/users/:type", (req: Request, res: Response) => {
//     let errorCode: number = 400;
//     try {
//         const type: string = req.params.type;

//         if (type !== "ADMIN" && type !== "NORMAL") {
//             errorCode = 422;
//             throw new Error("Valor de type inválido. É necessário que type seja ADMIN ou NORMAL");
//         };

//         const filteredList = users.filter(user => user.type === type);
//         res.status(200).send(filteredList);
//     } catch (error: any) {
//         res.status(errorCode).send({ message: error.message })
//     };
// });

// Exercício 4
app.post("/users", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const { name, email, type, age } = req.body;

        if (!name || !email || !type || !age) {
            errorCode = 422;
            throw new Error("Dados incompletos");
        }
        if (type !== "ADMIN" && type !== "NORMAL") {
            errorCode = 422;
            throw new Error("Valor de type inválido. É necessário que type seja ADMIN ou NORMAL");
        };
        if (typeof age !== "number" || age <= 0) {
            errorCode = 422;
            throw new Error("Valor de age deve ser um número maior que zero.");
        };

        const id = Date.now();

        const newUser: User = {
            id,
            name,
            email,
            type,
            age
        }

        users.push(newUser);

        res.status(201).send(users);
    } catch (error: any) {
        res.status(errorCode).send({ messagem: error.message });
    };
});

// Exercício 3
// app.get("/user", (req: Request, res: Response) => {
//     let errorCode: number = 400;
//     try {
//         const name: string = req.query.name as string;
//         if (!name) {
//             errorCode = 422;
//             throw new Error("Nome não enviado");
//         };

//         const user: User | undefined = users.find(user => user.name === name);
//         if (!user) {
//             errorCode = 404;
//             throw new Error("Usuário(a) não encontrado(a).");
//         };

//         res.status(200).send(user);
//     } catch (error: any) {
//         res.status(errorCode).send({ message: error.message })
//     };
// });

// Exercício 7
app.delete("/users/:id", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const id = Number(req.params.id);
        if (!id) {
            errorCode = 422;
            throw new Error("Não foi passado valor de id válido");
        }

        const hasUser = users.find(user => user.id === id);
        if (!hasUser) {
            errorCode = 404;
            throw new Error("Esse id de usuário(a) não existe");
        }

        const updateUsersData = users.filter(user => user.id !== id);

        res.status(204).send(updateUsersData);

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message});
    }
});

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});