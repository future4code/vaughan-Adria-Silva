import express, {Express, Request, Response} from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import { Client, dataBank } from './data';

const app: Express = express();

app.use(express.json());
app.use(cors());

// ENDPOINTS
app.get("/users", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        res.status(200).send(dataBank)
    } catch (error: any) {
        if (errorCode === 400) {
            res.status(errorCode).send({message: "Erro na requisição"})
        }
        res.status(errorCode).send({message: error.message})
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

        //Validar idade
        const eightennYears: number = new Date(1988, 0, 1).getTime();
        const splitBirth = birth.split("/");
        const birthTimeStamp : number = new Date(Number(splitBirth[2]), Number(splitBirth[1]) -1, Number(splitBirth[0])).getTime(); 
        const ageTimeStamp: number = Date.now() - birthTimeStamp;

        if (ageTimeStamp < eightennYears) {
            errorCode = 422;
            throw new Error("É necessário ter mais de 18 anos para abrir uma conta no LabeBank");
        };
        
        //Validar CPF
        if (cpf.length !== 14 || cpf[3] !== "." || cpf[7] !== "." || cpf[11] !== "-" ) {
            errorCode = 422;
            throw new Error("CPF não está no formato solicitado: XXX.XXX.XXX-XX");  
        };
        const findCpf = dataBank.find(client => client.cpf === cpf);
        if (findCpf) {
            errorCode = 422;
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
        if (errorCode === 400) {
            res.status(errorCode).send({message: "Erro na requisição"})
        }
        res.status(errorCode).send({message: error.message})
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

