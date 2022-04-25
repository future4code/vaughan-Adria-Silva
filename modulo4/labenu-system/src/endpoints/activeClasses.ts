import { Request, Response } from "express";
import { selectActiveClasses } from "../data/classesData/selectActiveClasses";
import { ClassCompleteInfo, FormatedClassCompleteInfo } from "../types";


export const activeClasses = async (req: Request, res: Response) => {
    let codeError: number = 400;
    try {

        const activeClasses: ClassCompleteInfo[] = await selectActiveClasses();

        const formatingActiveClasses: FormatedClassCompleteInfo[] = activeClasses.map( 
            (item: ClassCompleteInfo): FormatedClassCompleteInfo => {
            return {
                id: item.id,
                name: item.name,
                module: item.module,
                studentsId: item.studentsId ? [item.studentsId] : ["null"],
                teachersId: item.teachersId ? [item.teachersId] : ["null"]
            };
        });

        const activeClassesList: FormatedClassCompleteInfo[] = [...formatingActiveClasses];

        for (let i = 0; i < activeClassesList.length; i++) {
            if (
                i+1 < activeClassesList.length && 
                activeClassesList[i].id === activeClassesList[i+1].id
            ) {
                if (activeClassesList[i].studentsId[activeClassesList[i].studentsId.length - 1] !== activeClassesList[i+1].studentsId[0]) {
                    activeClassesList[i].studentsId.push(activeClassesList[i+1].studentsId[0]);
                }
                if (activeClassesList[i].teachersId[activeClassesList[i].teachersId.length - 1] !== activeClassesList[i+1].teachersId[0]) {
                    activeClassesList[i].teachersId.push(activeClassesList[i+1].teachersId[0]);
                }
                activeClassesList.splice(i+1, 1);
                i -= 1;
            };
        };

        res.status(200).send({activeClassesList});
    } catch (error: any) {
        (error.message).includes("SQLMESSAGE") 
        ? res.status(codeError).send({message: "Database connection problem. Please, try again later or contact our company!"})
        : res.status(codeError).send({message: error.message})
    };
};