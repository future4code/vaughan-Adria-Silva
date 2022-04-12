import { app } from "./app";
import { connection } from "./data/connection";
import { Request, Response } from "express";

// EXERCÌCIO 1 e 2

async function selectAllUsers(name?: string, type?: string, limit?: number, offset?: number): Promise<any> {
    let result: any;
    if (name) {
        result = await connection("aula48_exercicio")
            .select("*")
            .where("name", "like", `%${name}%`)
            .orderBy("name", "asc");
    } else if (type) {
        result = await connection("aula48_exercicio")
            .select("*")
            .where("type", "like", `%${type}%`)
            .orderBy("name", "asc");
    } else {
        result = await connection("aula48_exercicio")
            .select("*")
            .orderBy("email", "asc");
    };

    return result;
};

// A)
export const getAllUsersByName = async (req: Request, res: Response): Promise<void> => {
    try {
        const name = req.query.name as string;

        const users = await selectAllUsers(name)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(users)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}

// B)
type User = {
    id: number,
    name: string,
    email: string,
    type: string
}
export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const name = req.query.name as string;
        const type = req.params.type;

        let users: User[] = [];

        if (name) {
            users = await selectAllUsers(name);
        } else if (type) {
            users = await selectAllUsers(name, type);
        } else {
            users = await selectAllUsers()
        };


        if (!users.length) {
            res.statusCode = 404
            throw new Error("No users found")
        }

        res.status(200).send(users)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
};

// app.get("/users/", getAllUsers);
app.get("/users/:type", getAllUsers);

// EXERCÍCIO 3

async function selectLimitedUsers(limit: number, offset: number): Promise<any> {
    const result = await connection("aula48_exercicio")
            .select("*")
            .limit(limit)
            .offset(offset);

    return result;
};

export const getAllUsers3 = async (req: Request, res: Response): Promise<void> => {
    try {
        let numPage: number = Number(req.query.page);
        const quantityUsers: number = 5;

        let offset = quantityUsers * (numPage - 1);

        if (!numPage || numPage < 1) {
            throw new Error("Deve ser informado um número de página acima de 1");
        };

        const users = await selectLimitedUsers(quantityUsers, offset);

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(users)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}

app.get("/users/", getAllUsers3);
