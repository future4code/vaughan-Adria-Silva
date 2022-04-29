import { Request, Response } from "express";
import { findClassByName } from "../data/classesData/findClass";
import { findStudentById } from "../data/studentData/findStudent";
import { updateStudentClassId } from "../data/studentData/updateStudentClassId";
import { ClassType, Student } from "../types";


export const updateStudentClass = async(req: Request, res: Response) => {
    let codeError: number = 400;
    try {
        const {studentId, className} = req.body;

        if (
            !studentId || !className || 
            typeof studentId !== "string" || typeof className !== "string"
        ) {
            codeError = 422;
            throw new Error("Student's id and/or class's name is missing or it was sent wrong value(s)!");
        };

        const hasStudent: Student[] = await findStudentById(studentId);
        if (!hasStudent.length) {
            codeError = 422;
            throw new Error("This student does not exist!");
        };

        const hasName: ClassType[] = await findClassByName(className);
        if (!hasName.length) {
            codeError = 422;
            throw new Error("This class does not exist!");
        };

        await updateStudentClassId(studentId, hasName[0].id);

        res.status(200).send({message: "Student successfully changed class!"})
    } catch (error: any) {
        (error.message).includes("SQLMESSAGE") 
        ? res.status(codeError).send({message: "Database connection problem. Please, try again later or contact our company!"})
        : res.status(codeError).send({message: error.message})
    };
};