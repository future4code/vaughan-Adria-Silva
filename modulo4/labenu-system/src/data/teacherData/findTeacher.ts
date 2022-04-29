import { Teacher } from "../../types";
import { connection } from "../connection";
import { showError } from "../migration ";


export const findTeacherById = async (id: string): Promise<Teacher[]> => {
    const result = await connection("labesystem_teacher")
    .where({id})
    .then(res => res)
    .catch(showError);

    return result as Teacher[];
};

export const findTeacherByEmail = async (email: string): Promise<Teacher[]> => {
    const result = await connection("labesystem_teacher")
    .where({email})
    .then(res => res)
    .catch(showError);

    return result as Teacher[];
};