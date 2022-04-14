import { Request, Response } from "express";
import { allUsers, createTable, insertUser } from "../data/migrations";
import { User } from "../types";



export const getAllUsers = async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const usersList = await allUsers();

        res.status(200).send({usersList});
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
};