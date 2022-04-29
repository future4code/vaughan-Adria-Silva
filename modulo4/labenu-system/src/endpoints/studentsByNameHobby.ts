import { Request, Response } from "express";
import { selectStudent } from "../data/studentData/selectStudent";
import { formatDateToResponse } from "../functions/dateValidate";
import { FormatedStudent, Student } from "../types";


export const studentsByNameHobby = async (req: Request, res: Response) => {
    let codeError: number = 400;
    try {
        const name = req.query.name as string;
        const hobby = req.query.hobby as string;

        const students: Student[] = await selectStudent(name, hobby);
        const formatingStudentsList: FormatedStudent[] = students.map((student: Student): FormatedStudent => {
            const birthDate: string = formatDateToResponse(student.birth_date);
            return {
                id: student.id,
                name: student.name,
                email: student.email,
                birthDate,
                classId: student.class_id,
                hobby: student.hobby ? [student.hobby] : ["null"]
            }
        });

        const studentsList: FormatedStudent[] = [...formatingStudentsList];

        for (let i = 0; i < studentsList.length; i++) {
            if (
                studentsList[i].hobby[0] !== "null" && 
                i+1 < studentsList.length && 
                studentsList[i].id === studentsList[i+1].id
            ) {
                studentsList[i].hobby.push(studentsList[i+1].hobby[0])
                studentsList.splice(i+1, 1);
                i -= 1;
            }
        }

        res.status(200).send(studentsList);
    } catch (error: any) {
        (error.message).includes("SQLMESSAGE") 
        ? res.status(codeError).send({message: "Database connection problem. Please, try again later or contact our company!"})
        : res.status(codeError).send({message: error.message})
    };
};