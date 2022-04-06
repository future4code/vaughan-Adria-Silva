import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import knex from 'knex';
import dotenv from "dotenv";

dotenv.config();

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    }
});

const app: Express = express();
app.use(express.json());
app.use(cors());

// EXERCÍCIO 1
// A) O raw responde com o resultado da query e outras infos que não interessam
// para entregar como response da request, por isso utiliza-se o result[0]

// B)

const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
    `);

    return result[0];
};

const getNumberOfActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT COUNT(*) as quantity FROM Actor WHERE gender = "${gender}"
    `);

    return result[0];
}

app.get('/actor', async (req: Request, res: Response): Promise<void> => {
    try {
        const name = req.query.name;
        const gender = req.query.gender;
        let result: any = "Resultado"

        if (name && typeof name === "string") {
            result = await getActorByName(name);
        } else if (gender && typeof gender === "string") {
            result = await getNumberOfActors(gender);
        } else {
            const getAllActors = await connection.raw(`
            SELECT * FROM Actor
            `);
            result = getAllActors[0];
        };

        res.status(200).send(result);
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message);
    }

});

app.post("/actor")


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    };
});
