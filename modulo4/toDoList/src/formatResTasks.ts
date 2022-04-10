import { responseFormatDate } from "./dateValidation";

type tasksResSQL = {
    id: string,
    title: string,
    description: string,
    status: string,
    limit_date: string,
    creator_user_id: string,
    nickname: string
}

type tasksFinalResponse = {
    taskId: string,
    title: string,
    description: string,
    limitDate: string,
    status: string,
    creatorUserId: string,
    creatorUserNickname: string
}


export const formatResponseTasks = (tasksList: tasksResSQL[]): tasksFinalResponse[] =>{
    const formatedTasks = tasksList.map(task  => {
        const formatedDate = responseFormatDate(task.limit_date);
        return {
           taskId: task.id,
           title: task.title,
           description: task.description,
           limitDate: formatedDate,
           status: task.status,
           creatorUserId: task.creator_user_id,
           creatorUserNickname: task.nickname
        }
     });

     return formatedTasks;
}; 
