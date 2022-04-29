import { Id } from "../../types";
import { connection } from "../connection";
import { showError } from "../migration ";

export const selectHobbyById = async (
    hobby: string,
): Promise<Id[]> => {
    const result = await connection("labesystem_hobby")
    .select("labesystem_hobby.id")
    .where({hobby})
    .then(res => res)
    .catch(showError);
       
    return result as unknown as Id[];
};