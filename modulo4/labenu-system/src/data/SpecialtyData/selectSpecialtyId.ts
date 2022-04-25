import { Id } from "../../types";
import { connection } from "../connection";
import { showError } from "../migration ";

export const selectSpecialtyId = async (
    specialty: string,
): Promise<Id[]> => {
    const result = await connection("labesystem_specialty")
    .select("labesystem_specialty.id")
    .where({specialty})
    .then(res => res)
    .catch(showError);
       
    return result as unknown as Id[];
};