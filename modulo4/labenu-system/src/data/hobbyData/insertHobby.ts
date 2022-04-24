import { connection } from "../connection";
import { showError } from "../migration ";

export const insertHobby = async (
    hobby: string,
): Promise<void> => {
    const idGenerator = (Math.random()*Math.pow(10, 10)).toFixed(); 

    await connection("labesystem_hobby")
    .insert({
        id: `${idGenerator}`,
        hobby,
    })
    .then(() => console.log("created hobby"))
    .catch(showError);
};