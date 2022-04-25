import { Request, Response } from "express";
import { findClassByName } from "../data/classesData/findClass";
import { findTeacherById } from "../data/teacherData/findTeacher";
import { updateTeacherClassId } from "../data/teacherData/updateTeacherClassId";
import { ClassType, Teacher } from "../types";


export const updateTeacherClass = async (req: Request, res: Response) => {
    let codeError: number = 400;
    try {
        const {teacherId, className} = req.body;

        if (
            !teacherId || !className || 
            typeof teacherId !== "string" || typeof className !== "string"
        ) {
            codeError = 422;
            throw new Error("Teacher's id and/or class's name is missing or it was sent wrong value(s)!");
        };

        const hasTeacher: Teacher[] = await findTeacherById(teacherId);
        if (!hasTeacher.length) {
            codeError = 422;
            throw new Error("This teacher does not exist!");
        };

        const hasName: ClassType[] = await findClassByName(className);
        if (!hasName.length) {
            codeError = 422;
            throw new Error("This class does not exist!");
        };

        await updateTeacherClassId(teacherId, hasName[0].id);

        res.status(200).send({message: "Teacher successfully changed class!"});
    } catch (error: any) {
        (error.message).includes("SQLMESSAGE") 
        ? res.status(codeError).send({message: "Database connection problem. Please, try again later or contact our company!"})
        : res.status(codeError).send({message: error.message})
    };
};