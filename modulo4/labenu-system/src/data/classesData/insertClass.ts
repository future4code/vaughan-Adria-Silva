import { connection } from "../connection";
import { showError } from "../migration ";

export const insertClass = async (
    id: string,
    name: string,
    module?: number
): Promise<void> => {
    await connection("labesystem_class")
    .insert({
        id,
        name,
        module
    })
    .then(() => console.log("created class"))
    .catch(showError);
};