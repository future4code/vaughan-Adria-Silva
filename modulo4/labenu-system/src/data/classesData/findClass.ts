import { ClassType } from "../../types";
import { connection } from "../connection";
import { showError } from "../migration ";


export const findClass = async (name: string): Promise<ClassType[]> => {
    const result = await connection("labesystem_class")
        .where({name})
        .then(res => res)
        .catch(showError)
    
    return result as ClassType[];
};