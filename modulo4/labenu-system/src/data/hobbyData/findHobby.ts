import { Hobby } from "../../types";
import { connection } from "../connection";
import { showError } from "../migration ";


export const findHobbyByDescription = async (hobby: string): Promise<Hobby[]> => {
    const result = await connection("labesystem_hobby")
    .where({hobby})
    .then(res => res)
    .catch(showError);
    
    return result as Hobby[];
};