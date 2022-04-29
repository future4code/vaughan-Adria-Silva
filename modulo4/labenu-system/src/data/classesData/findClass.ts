import { ClassType } from "../../types";
import { connection } from "../connection";
import { showError } from "../migration ";


export const findClassByName = async (name?: string, id?: string): Promise<ClassType[]> => {
    const result = await connection("labesystem_class")
    .where({name})
    .then(res => res)
    .catch(showError);
    
    return result as ClassType[];
};

export const findClassById = async (id: string): Promise<ClassType[]> => {
    const result = await connection("labesystem_class")
    .where({id})
    .then(res => res as ClassType[])
    .catch(showError);

    return result as ClassType[];
};