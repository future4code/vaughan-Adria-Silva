import { Request, Response } from "express";
import { findUser, getPurchasesByUserId } from "../data/migrations";


export const getPurchasesUser = async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const userId = req.params.user_id;

        const hasUser = await findUser(userId);
        if (!hasUser.length) {
            errorCode = 422;
            throw new Error("Id de usuário(a) inválido");
        };

        const purchasesList = await getPurchasesByUserId(userId);

        res.status(200).send(purchasesList);
    } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message);
    };
};