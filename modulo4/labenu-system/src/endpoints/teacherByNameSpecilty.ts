import { Request, Response } from "express";
import { selectTeacher } from "../data/teacherData/selectTeacher";
import { formatDateToResponse } from "../functions/dateValidate";
import { FormatedTeacher, Teacher } from "../types";


export const teacherByNameSpecilty = async (req: Request, res: Response) => {
    let codeError: number = 400;
    try {
        const name = req.query.name as string;
        const specialty = req.query.specialty as string;

        const teachers: Teacher[] = await selectTeacher(name, specialty);
        const formatingTeachersList = teachers.map( (teacher: Teacher): FormatedTeacher => {
            const birthDate: string = formatDateToResponse(teacher.birth_date);

            return {
                id: teacher.id,
                name: teacher.name,
                email: teacher.email,
                birthDate,
                classId: teacher.class_id,
                specialty: [teacher.specialty]
            }
        });

        const teachersList: FormatedTeacher[] = [...formatingTeachersList];

        for (let i = 0; i < teachersList.length; i++) {
            if (
                i+1 < teachersList.length && 
                teachersList[i].id === teachersList[i+1].id
            ) {
                teachersList[i].specialty.push(teachersList[i+1].specialty[0])
                teachersList.splice(i+1, 1);
                i -= 1;
            }
        }

        res.status(200).send(teachersList);
    } catch (error: any) {
        (error.message).includes("SQLMESSAGE") 
        ? res.status(codeError).send({message: "Database connection problem. Please, try again later or contact our company!"})
        : res.status(codeError).send({message: error.message})
    };
}; 