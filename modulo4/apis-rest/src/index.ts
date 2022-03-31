import express, {Express, Request, Response} from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import { users } from './data';

const app: Express = express();

app.use(express.json());
app.use(cors());

// ENDPOINTS
// Exercício 1
app.get("/users", (req: Request, res: Response) => {
    let errorCode: number = 500;
    try {
        res.status(200).send(users);

    } catch (error) {
        res.status(errorCode).send({message: "Erro no servidor"})
    };
});

// Exercício 2
app.get("/users/:type", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const type: string = req.params.type;

        if (type !== "ADMIN" && type !== "NORMAL") {
            errorCode = 422;
            throw new Error("Valor de type inválido. É necessário que type seja ADMIN ou NORMAL");
        };

        const filteredList = users.filter(user => user.type === type);
        res.status(200).send(filteredList);
    } catch (error: any) {
        res.status(errorCode).send({message: error.message})
    };
});

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});