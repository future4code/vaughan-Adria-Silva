import { Request, Response } from "express";
import { findClassByName } from "../data/classesData/findClass";
import { updateModule } from "../data/classesData/updateModule";
import { ClassType } from "../types";


export const updateClassModule = async (req: Request, res: Response) => {
    let codeError: number = 400;
    try {
        let {name, newModule} = req.body;

        if (!name || typeof name !== "string") {
            codeError = 422;
            throw new Error("Name is missing or wrong format name were sent.");
        };

        if (!newModule || ![0, 1, 2, 3, 4, 5, 6].includes(newModule)) {
            codeError = 422;
            throw new Error("Module is missing or wrong module was sent. Only numbers from 0 to 6 are accepted!");
        };

        const hasName: ClassType[] = await findClassByName(name);
        if (!hasName.length) {
            codeError = 422;
            throw new Error("This class does not exist!");
        };

        await updateModule(name, newModule);
        
        res.status(200).send({message: "Module was updated successfully!"})
    } catch (error: any) {
        (error.message).includes("SQLMESSAGE") 
        ? res.status(codeError).send({message: "Database connection problem. Please, try again later or contact our company!"})
        : res.status(codeError).send({message: error.message})
    }
};