import { connection } from "../connection"
import { showError } from "../migration ";


export const updateStudentClassId = async(studentId: string, class_id: string): Promise<void> => {
    await connection("labesystem_student")
    .where("labesystem_student.id", "=", studentId)
    .update({class_id})
    .then(() => console.log("updated student's class_id"))
    .catch(showError);
}