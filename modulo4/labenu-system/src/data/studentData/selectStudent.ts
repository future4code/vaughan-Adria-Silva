import { Student } from "../../types";
import { connection } from "../connection"
import { showError } from "../migration "


export const selectStudent = async (
    name?: string,
    hobby?: string
): Promise<Student[]> => {
    if (name && hobby) {
        const result = await connection("labesystem_student")
            .select(
                "labesystem_student.*",
                "labesystem_hobby.hobby"
            ).leftJoin(
                "labesystem_student_with_hobby",
                "labesystem_student.id",
                "=",
                "labesystem_student_with_hobby.student_id"
            ).leftJoin(
                "labesystem_hobby",
                "labesystem_student_with_hobby.hobby_id",
                "=",
                "labesystem_hobby.id"
            ).whereLike("name", `%${name}%`)
            .whereLike("hobby", `%${hobby}%`)
            .orderBy("labesystem_student.id", "asc")
            .then(res => res)
            .catch(showError);
        
        return result as Student[];

    } else if (name) {
        const result = await connection("labesystem_student")
            .select(
                "labesystem_student.*",
                "labesystem_hobby.hobby"
            ).leftJoin(
                "labesystem_student_with_hobby",
                "labesystem_student.id",
                "=",
                "labesystem_student_with_hobby.student_id"
            ).leftJoin(
                "labesystem_hobby",
                "labesystem_student_with_hobby.hobby_id",
                "=",
                "labesystem_hobby.id"
            ).whereLike("name", `%${name}%`)
            .orderBy("labesystem_student.id", "asc")
            .then(res => res)
            .catch(showError);
        
        return result as Student[];
    } else if (hobby) {
        const result = await connection("labesystem_student")
            .select(
                "labesystem_student.*",
                "labesystem_hobby.hobby"
            ).leftJoin(
                "labesystem_student_with_hobby",
                "labesystem_student.id",
                "=",
                "labesystem_student_with_hobby.student_id"
            ).leftJoin(
                "labesystem_hobby",
                "labesystem_student_with_hobby.hobby_id",
                "=",
                "labesystem_hobby.id"
            ).whereLike("hobby", `%${hobby}%`)
            .orderBy("labesystem_student.id", "asc")
            .then(res => res)
            .catch(showError);
        
        return result as Student[];
    } else {
        const result = await connection("labesystem_student")
        .select(
            "labesystem_student.*",
            "labesystem_hobby.hobby"
        ).leftJoin(
            "labesystem_student_with_hobby",
            "labesystem_student.id",
            "=",
            "labesystem_student_with_hobby.student_id"
        ).leftJoin(
            "labesystem_hobby",
            "labesystem_student_with_hobby.hobby_id",
            "=",
            "labesystem_hobby.id"
        ).orderBy("labesystem_student.id", "asc")
        .then(res => res)
        .catch(showError);
    
        return result as Student[];
    };
};