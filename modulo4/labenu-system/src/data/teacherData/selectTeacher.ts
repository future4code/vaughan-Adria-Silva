import { Teacher } from "../../types";
import { connection } from "../connection";
import { showError } from "../migration ";

export const selectTeacher = async (
    name?: string,
    specialty?: string
): Promise<Teacher[]> => {
    if (name && specialty) {
        const result = await connection("labesystem_teacher")
        .select(
            "labesystem_teacher.*",
            "labesystem_specialty.specialty"
        ).leftJoin(
            "labesystem_teacher_with_specialty",
            "labesystem_teacher.id",
            "=",
            "labesystem_teacher_with_specialty.teacher_id"
        ).leftJoin(
            "labesystem_specialty",
            "labesystem_teacher_with_specialty.specialty_id",
            "=",
            "labesystem_specialty.id"
        ).whereLike("name", `%${name}%`)
        .whereLike("specialty", `%${specialty}%`)
        .orderBy("labesystem_teacher.id", "asc")
        .then(res => res)
        .catch(showError);

        return result as Teacher[];

    } else if (name) {
        const result = await connection("labesystem_teacher")
        .select(
            "labesystem_teacher.*",
            "labesystem_specialty.specialty"
        ).leftJoin(
            "labesystem_teacher_with_specialty",
            "labesystem_teacher.id",
            "=",
            "labesystem_teacher_with_specialty.teacher_id"
        ).leftJoin(
            "labesystem_specialty",
            "labesystem_teacher_with_specialty.specialty_id",
            "=",
            "labesystem_specialty.id"
        ).whereLike("name", `%${name}%`)
        .orderBy("labesystem_teacher.id", "asc")
        .then(res => res)
        .catch(showError);

        return result as Teacher[];
    } else if (specialty) {
        const result = await connection("labesystem_teacher")
        .select(
            "labesystem_teacher.*",
            "labesystem_specialty.specialty"
        ).leftJoin(
            "labesystem_teacher_with_specialty",
            "labesystem_teacher.id",
            "=",
            "labesystem_teacher_with_specialty.teacher_id"
        ).leftJoin(
            "labesystem_specialty",
            "labesystem_teacher_with_specialty.specialty_id",
            "=",
            "labesystem_specialty.id"
        ).whereLike("specialty", `%${specialty}%`)
        .orderBy("labesystem_teacher.id", "asc")
        .then(res => res)
        .catch(showError);

        return result as Teacher[];
    } else {
        const result = await connection("labesystem_teacher")
        .select(
            "labesystem_teacher.*",
            "labesystem_specialty.specialty"
        ).leftJoin(
            "labesystem_teacher_with_specialty",
            "labesystem_teacher.id",
            "=",
            "labesystem_teacher_with_specialty.teacher_id"
        ).leftJoin(
            "labesystem_specialty",
            "labesystem_teacher_with_specialty.specialty_id",
            "=",
            "labesystem_specialty.id"
        ).orderBy("labesystem_teacher.id", "asc")
        .then(res => res)
        .catch(showError);

        return result as Teacher[];
    };
};