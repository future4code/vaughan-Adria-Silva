import { ClassType } from "../../types";
import { connection } from "../connection";
import { showError } from "../migration ";

export const selectActiveClasses = async (): Promise<ClassType[]> => {
    const result = await connection("labesystem_class")
        .select(
            "labesystem_class.*",
            "labesystem_student.id as studentsId",
            "labesystem_teacher.id as teachersID"
        ).innerJoin(
            "labesystem_student",
            "labesystem_class.id",
            "=",
            "labesystem_student.class_id"
        ).innerJoin(
            "labesystem_teacher",
            "labesystem_class.id",
            "=",
            "labesystem_teacher.class_id"
        ).where("module", ">", 0)
        .then(res => res)
        .catch(showError);

    return result as unknown as ClassType[];
};