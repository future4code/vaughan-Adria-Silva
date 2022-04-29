import { connection } from "../connection";
import { showError } from "../migration ";

export const updateModule = async (
    name: string,
    module: number
): Promise<void> => {
    await connection("labesystem_class")
    .where("name", "=", name)
    .update({module})
    .then(() => console.log("updated class module"))
    .catch(showError);
};