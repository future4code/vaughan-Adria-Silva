import { Request, Response } from "express";
import { createTablePurchases, findProduct, findUser, insertPurchase } from "../data/migrations";


export const registerPurchase = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400;
    try {
        const { user_id, product_id, quantity } = req.body;
        if (!user_id || !product_id || !quantity ||
            typeof quantity !== "number"
        ) {
            errorCode = 422;
            throw new Error("Informações incompletas ou inválidas");
        };

        const hasUser = await findUser(user_id);        
        if(!hasUser.length) {
            errorCode = 422;
            throw new Error("Id do(a) usuário(a) inválido");
        };

        const hasProduct = await findProduct(product_id);
        if (!hasProduct.length) {
            errorCode = 422;
            throw new Error("Id de produto inválido");
        };

        

        await createTablePurchases();

        const id: string = `${Date.now()}`;
        const totalPrice = Number((quantity * hasProduct[0].price).toFixed(2));

        await insertPurchase(id, user_id, product_id, quantity, totalPrice);

        res.status(201).send("Compra registrada")
    } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message);
    };
};