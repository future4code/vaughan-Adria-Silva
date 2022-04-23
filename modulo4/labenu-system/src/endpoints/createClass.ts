import { Request, Response } from "express";
import { Class } from "../classes/class";
import { findClass } from "../data/classesData/findClass";
import { insertClass } from "../data/classesData/insertClass";


export const createClass = async (req: Request ,res: Response) => {
    let codeError: number = 400;
    try {
        let {name, module} = req.body;

        if (!name || typeof name !== "string") {
            codeError = 422;
            throw new Error("Name is missing or wrong format name were sent.");
        };

        if (module && ![0, 1, 2, 3, 4, 5, 6].includes(module)) {
            codeError = 422;
            throw new Error("Wrong module was sent. Only numbers from 0 to 6 are accepted!");
        };

        const hasName = await findClass(name);
        if (hasName.length) {
            codeError = 422;
            throw new Error("This class already exists!");
        };


        const newClass: Class = new Class(name, [], [], module);

        await insertClass(newClass.getId(), newClass.getName(), newClass.getModule());

        res.status(201).send("Class was created successfully!")
    } catch (error: any) {
        res.status(codeError).send({ 
            message: error.message 
            || error.sqlMessage 
            && "Database connection problem. Please, try again later!"
        })
    };
};