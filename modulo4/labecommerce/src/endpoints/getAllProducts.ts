import { Request, Response } from "express";
import { allProducts } from "../data/migrations";
import { Product } from "../types";


export const getAllProducts = async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const order = req.query.order as string;
        const search = req.query.search as string;

        const productsList: Product[]  = await allProducts(order, search);

        res.status(200).send({productsList});
    } catch (error: any) {
        res.send(errorCode).send(error.sqlMessage || error.message);
    };
};