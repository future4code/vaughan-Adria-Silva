import { Request, Response } from "express";
import { Teacher } from "../classes/teacher";
import { findClassById } from "../data/classesData/findClass";
import { findSpecialtyByDescription } from "../data/SpecialtyData/findSpecialty";
import { insertSpecialty } from "../data/SpecialtyData/insertSpecialty";
import { selectSpecialtyId } from "../data/SpecialtyData/selectSpecialtyId";
import { findTeacherByEmail } from "../data/teacherData/findTeacher";
import { insertTeacher } from "../data/teacherData/insertTeacher";
import { insertRelationTeacherSpecialty } from "../data/teacherWithSpecialty/insertTeacherWithSpecialty";
import { dateFormatValidate, isMinor } from "../functions/dateValidate";
import { Id, Specialty } from "../types";



export const createTeacher = async (req: Request, res: Response) => {
    let codeError: number = 400;
    try {
        const {name, email, birthDate, classId } = req.body;
        let specialties = req.body.specialties as string[];

        if (!name || typeof name !== "string") {
            codeError = 422;
            throw new Error("Name is missing or wrong format name was sent.");
        };

        if (!email || typeof email !== "string" || !email.includes("@")) {
            codeError = 422;
            throw new Error("Email is missing or wrong format email was sent.");
        };

        if (typeof birthDate !== "string"){
            throw new Error("Wrong birth date format was sent. The accepted format is: DD/MM/AAAA");
        };
        dateFormatValidate(birthDate);
        isMinor(birthDate);

        const hasClassId = await findClassById(classId);
        if (!hasClassId.length) {
            codeError = 422;
            throw new Error("This class does not exist!");
        };

        const hasEmail = await findTeacherByEmail(email);
        if (hasEmail.length) {
            codeError = 422;
            throw new Error("This email is already registered! Please, sent a new email!");
        };

        if (!specialties.length) {
            codeError = 422;
            throw new Error("Teacher must have at least on specialty");
        };

        const listSpecialtiesId: string[] = []

        for (let i: number = 0; i < specialties.length; i++) {
            const hasSpecialty: Specialty[] = await findSpecialtyByDescription(specialties[i]);
            if (!hasSpecialty.length) {
                await insertSpecialty(specialties[i]);
            };
            const specialtyId: Id[] = await selectSpecialtyId(specialties[i]);
            listSpecialtiesId.push(specialtyId[0].id);
        };

        const newTeacher = new Teacher(name, email, birthDate, classId, specialties);

        await insertTeacher(
            newTeacher.getId(),
            newTeacher.getName(),
            newTeacher.getEmail(),
            newTeacher.getSqlFormatBirthDate(),
            newTeacher.getClassId()
        );

        for (let i: number = 0; i < listSpecialtiesId.length; i++) {
            await insertRelationTeacherSpecialty(newTeacher.getId(), listSpecialtiesId[i]);
        };

        res.status(201).send({message: "New teacher was added successfully!"});
    } catch (error: any) {
        if (
            error.message === "Birth date is not in the requested format: DD / MM / AAAA" ||
            error.message === "Some characters of day, month and/or year of birth date are not numeric" ||
            error.message === "Invalid birth date format!" ||
            error.message === "Age must be over 18 to be a student or a teacher at Labenu!"
        ) {
            res.status(422).send({ message: error.message });
        };

        (error.message).includes("SQLMESSAGE") 
        ? res.status(codeError).send({message: "Database connection problem. Please, try again later or contact our company!"})
        : res.status(codeError).send({message: error.message})
    };
};