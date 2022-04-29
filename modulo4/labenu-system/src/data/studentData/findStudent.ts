import { Student } from "../../types";
import { connection } from "../connection";
import { showError } from "../migration ";


export const findStudentById = async (id: string): Promise<Student[]> => {
    const result = await connection("labesystem_student")
    .where({id})
    .then(res => res)
    .catch(showError);

    return result as Student[];
};

export const findStudentByEmail = async (email: string): Promise<Student[]> => {
    const result = await connection("labesystem_student")
    .where({email})
    .then(res => res)
    .catch(showError);

    return result as Student[];
};