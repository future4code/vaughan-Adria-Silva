import { Request, Response } from "express";
import { createTableUsers, insertUser } from "../data/migrations";



export const registerUser = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400;
    try {
        const {name, email, password} = req.body;

        if (!name || !email || !password ||
            typeof name !== "string" || typeof email !== "string"
        ) {
            errorCode = 422;
            throw new Error("Informações incompletas ou inválidas!")
        };

        const id: string = `${Date.now()}`;

        await createTableUsers();
        await insertUser(id, name, email, password);

        res.status(201).send("Usuário registrado com sucesso!");
    } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    };
};