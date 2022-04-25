import { connection } from "../connection";
import { showError } from "../migration ";

export const insertTeacher = async (
    id: string,
    name: string,
    email: string,
    birth_date: string,
    class_Id: string
): Promise<void> => {
    await connection("labesystem_teacher")
    .insert({
        id,
        name,
        email,
        birth_date, 
        class_Id
    })
    .then(() => console.log("added teacher"))
    .catch(showError);
};