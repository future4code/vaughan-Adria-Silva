import { connection } from "../connection"
import { showError } from "../migration ";


export const updateTeacherClassId = async(
    teacherId: string, class_id: string
): Promise<void> => {
    await connection("labesystem_teacher")
    .where("labesystem_teacher.id", "=", teacherId)
    .update({class_id})
    .then(() => console.log("updated teacher's class_id"))
    .catch(showError);
}