import { ClassCompleteInfo } from "../../types";
import { connection } from "../connection";
import { showError } from "../migration ";

export const selectActiveClasses = async (): Promise<ClassCompleteInfo[]> => {
    const result = await connection("labesystem_class")
        .select(
            "labesystem_class.*",
            "labesystem_student.id as studentsId",
            "labesystem_teacher.id as teachersId"
        ).leftJoin(
            "labesystem_student",
            "labesystem_class.id",
            "=",
            "labesystem_student.class_id"
        ).leftJoin(
            "labesystem_teacher",
            "labesystem_class.id",
            "=",
            "labesystem_teacher.class_id"
        ).where("module", ">", 0)
        .orderBy("labesystem_class.id", "asc")
        .then(res => res)
        .catch(showError);
    
    return result as ClassCompleteInfo[];
};