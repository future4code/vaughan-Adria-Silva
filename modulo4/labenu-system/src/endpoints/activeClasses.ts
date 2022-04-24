import { Request, Response } from "express";
import { selectActiveClasses } from "../data/classesData/selectActiveClasses";


export const activeClasses = async (req: Request, res: Response) => {
    let codeError: number = 400;
    try {

        const activeClasses = await selectActiveClasses();

        res.status(200).send({activeClasses});
    } catch (error: any) {
        res.status(codeError).send({ 
            message: error.message 
            || error.sqlMessage 
            && "Database connection problem. Please, try again later!"
        })
    };
};