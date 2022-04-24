import { Request, Response } from "express";
import { Student } from "../classes/student";
import { findClassById } from "../data/classesData/findClass";
import { findHobbyByDescription } from "../data/hobbyData/findHobby";
import { insertHobby } from "../data/hobbyData/insertHobby";
import { insertRelationStudentHobby } from "../data/studentWithHobby/insertStudentWithHobby";
import { selectHobbyById } from "../data/hobbyData/selectHobbyId";
import { insertStudent } from "../data/studentData/insertStudent";
import { dateFormatValidate, isMinor } from "../functions/dateValidate";
import { Id } from "../types";


export const createStudent = async (req: Request, res: Response) => {
    let codeError: number = 400;
    try {
        const {name, email, birthDate, classId } = req.body;
        let hobbies = req.body.hobbies as string[];

        if (!name || typeof name !== "string") {
            codeError = 422;
            throw new Error("Name is missing or wrong format name were sent.");
        };

        if (!email || typeof email !== "string" || !email.includes("@")) {
            codeError = 422;
            throw new Error("Email is missing or wrong format email were sent.");
        };

        if (typeof birthDate !== "string"){
            throw new Error("A data não está no formato solicitado: DD / MM / AAAA");
        };
        dateFormatValidate(birthDate);
        isMinor(birthDate);

        const hasClassId = await findClassById(classId);
        if (!hasClassId.length) {
            codeError = 422;
            throw new Error("This class do not exists!");
        };

        if (!hobbies.length) {
            const newStudent = new Student(name, email, birthDate, classId, []);

            await insertStudent(
                newStudent.getId(),
                newStudent.getName(),
                newStudent.getEmail(),
                newStudent.getSqlFormatBirthDate(),
                newStudent.getClassId()
            );
        };

        if (hobbies.length) {
            const listHobbiesId: string[] = []

            for (let i: number = 0; i < hobbies.length; i++) {
                const hasHobby = await findHobbyByDescription(hobbies[i]);
                if (!hasHobby.length) {
                    await insertHobby(hobbies[i]);
                };
                const hobbyId: Id[] = await selectHobbyById(hobbies[i]);

                listHobbiesId.push(hobbyId[0].id);
            };

            const newStudent = new Student(name, email, birthDate, classId, hobbies);

            await insertStudent(
                newStudent.getId(),
                newStudent.getName(),
                newStudent.getEmail(),
                newStudent.getSqlFormatBirthDate(),
                newStudent.getClassId()
            );

            for (let i: number = 0; i < listHobbiesId.length; i++) {
                await insertRelationStudentHobby(newStudent.getId(), listHobbiesId[i]);
            };
        };

        res.status(201).send({message: "Student was added successfully!"})
    } catch (error: any) {
        if (
            error.message === "Birth date is not in the requested format: DD / MM / AAAA" ||
            error.message === "Some characters of day, month and/or year of birth date are not numeric" ||
            error.message === "Invalid birth date format!" ||
            error.message === "Age must be over 18 to be a student at Labenu!"
        ) {
            res.status(422).send({ message: error.message });
        };

        res.status(codeError).send({ 
            message: error.message 
            || error.sqlMessage 
            && "Database connection problem. Please, try again later!"
        })
    };
};