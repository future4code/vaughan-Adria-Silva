import { Specialty } from "../../types";
import { connection } from "../connection";
import { showError } from "../migration ";


export const findSpecialtyByDescription = async (specialty: string): Promise<Specialty[]> => {
    const result = await connection("labesystem_specialty")
    .where({specialty})
    .then(res => res)
    .catch(showError);
    
    return result as Specialty[];
};