import { Request, Response } from "express";
import { allUsers } from "../data/migrations";
import { User } from "../types";



export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400;
    try {
        const usersList: User[] = await allUsers();

        res.status(200).send({usersList});
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    };
};