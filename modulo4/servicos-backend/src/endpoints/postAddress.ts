import { Request, Response } from "express";
import { insertAddress } from "../data/migration";
import { getAddressInfo } from "../services/getAddressInfo";



export const postAddress = async(req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const {cep, number, complement} = req.body;

        if(!cep || !number || 
            typeof cep !== "number" || typeof number !== "number"
        ) {
            errorCode = 422;
            throw new Error("É obrigatório o envio do CEP e do número da residência em números");
        };

        const addressInfos = await getAddressInfo(cep);
        if (!addressInfos) {
            errorCode = 500
            throw new Error("Ocorreu erro na requisição do seu endereço pelo CEP")
        }

        await insertAddress(cep, number, addressInfos.district, addressInfos.city ,addressInfos.state, complement);

        res.status(201).send("Endereço cadastrado com sucesso");

    } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message);
    };
};