import { connection } from "../connection";
import { showError } from "../migration ";

export const insertSpecialty = async (
    specialty: string,
): Promise<void> => {
    const idGenerator = (Math.random()*Math.pow(10, 10)).toFixed(); 

    await connection("labesystem_specialty")
    .insert({
        id: `${idGenerator}`,
        specialty,
    })
    .then(() => console.log("created specialty"))
    .catch(showError);
};