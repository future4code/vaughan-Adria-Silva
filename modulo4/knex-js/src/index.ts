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
            //Exercício 3-b
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

// EXERCÌCIO 2
// A)
const updateSalary = async (id: string, salary: number): Promise<void> => {
    await connection("Actor")
    .update({salary})
    .where({id})
};
// Exercício 4-a
app.put("/actor/:id", async (req: Request, res: Response) => {
    try {
        const salary = req.body.salary;
        const id = req.params.id;
        await updateSalary(id, salary);

        const result = await connection("Actor").where({id})

        res.status(200).send(result);
    } catch (error: any){
        res.status(400).send(error.sqlMessage || error.message);
    };
});
// B)
const deleteActor = async (id: string) : Promise<void> => {
    await connection("Actor")
    .where({id}).delete();
};
// Exercício 4-b
app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await deleteActor(id);

        res.status(204).send("Ator/atriz deletado (a)");
    } catch (error: any){
        res.status(400).send(error.sqlMessage || error.message);
    };
});

// C)
const getAvgSalaryByGender = async(gender: string): Promise<any> => {
    const avarage = await connection("Actor")
    .avg('salary as avarage').where({gender});
    console.log(avarage);
    return avarage;
};

app.get("/actor/avg/:gender", async (req: Request, res: Response) => {
    try {
        const gender = req.params.gender;
        console.log(gender);
        const result = await getAvgSalaryByGender(gender);

        res.status(200).send({result});
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message);
    };
});

// EXERCÌCIO 3
// A)
app.get('/actor/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        const result = await connection("Actor")
        .where({id});

        res.status(200).send(result);
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message);
    }

});


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    };
});
