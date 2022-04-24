import { Request, Response } from "express";
import { findClassByName } from "../data/classesData/findClass";
import { findStudentById } from "../data/studentData/findStudent";
import { updateStudentClassId } from "../data/studentData/updateStudentClassId";


export const updateStudentClass = async(req: Request, res: Response) => {
    let codeError: number = 400;
    try {
        const {studentId, className} = req.body;

        if (
            !studentId || !className || 
            typeof studentId !== "string" || typeof className !== "string"
        ) {
            codeError = 422;
            throw new Error("Student's id and/or class's name is missing or it was sent wrong value(s)!")
        };

        const hasStudent = await findStudentById(studentId);
        if (!hasStudent.length) {
            codeError = 422;
            throw new Error("This student do not exist!");
        };

        const hasName = await findClassByName(className);
        if (!hasName.length) {
            codeError = 422;
            throw new Error("This class do not exist!");
        };

        await updateStudentClassId(studentId, hasName[0].id);

        res.status(200).send({message: "Student successfully changed class!"})
    } catch (error: any) {
        res.status(codeError).send({ 
            message: error.message 
            || error.sqlMessage 
            && "Database connection problem. Please, try again later!"
        });
    };
};