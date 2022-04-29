import { connection } from "../connection";
import { showError } from "../migration ";

export const insertRelationStudentHobby = async (
    student_id: string,
    hobby_id: string
): Promise<void> => {
    const idGenerator = (Math.random()*Math.pow(10, 10)).toFixed(); 
    await connection("labesystem_student_with_hobby")
    .insert({
        id: `${idGenerator}`,
        student_id,
        hobby_id
    })
    .then(() => console.log("created student and hobby relation"))
    .catch(showError);
};

