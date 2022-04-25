import { connection } from "../connection";
import { showError } from "../migration ";

export const insertRelationTeacherSpecialty = async (
    teacher_id: string,
    specialty_id: string
): Promise<void> => {
    const idGenerator = (Math.random()*Math.pow(10, 10)).toFixed(); 
    await connection("labesystem_teacher_with_specialty")
    .insert({
        id: `${idGenerator}`,
        teacher_id,
        specialty_id
    })
    .then(() => console.log("created teacher and specailty"))
    .catch(showError);
};