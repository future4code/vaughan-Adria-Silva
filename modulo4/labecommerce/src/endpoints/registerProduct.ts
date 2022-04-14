import { Request, Response } from "express";
import { createTableProducts, insertProduct} from "../data/migrations";


export const registerProduct = async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const { name, price, image_url } = req.body;
        if (!name || !price || !image_url ||
            typeof name !== "string" || 
            typeof price !== "number" || 
            typeof image_url !== "string"
        ) {
            errorCode = 422;
            throw new Error("Informações incompletas ou inválidas!");
        };

        const id = `${Date.now()}`;

        await createTableProducts();
        await insertProduct(id, name, price, image_url);

        res.status(201).send("Produto cadastrado");
    } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message);
    };
};