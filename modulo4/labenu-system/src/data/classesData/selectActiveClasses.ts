import { ClassType } from "../../types";
import { connection } from "../connection";
import { showError } from "../migration ";

export const selectActiveClasses = async (): Promise<ClassType[]> => {
    const result = await connection("labesystem_class")
    .where("module", ">", 0)
    .then(res => res)
    .catch(showError);

    return result as unknown as ClassType[];
};