import axios from "axios"
import { baseURL } from "./baseURL"

type User = {
	id: string;
	name: string;
	email: string;
};

type Notification = {
    subscriberId: string,
    message: string
};

const getSubscribers = async(): Promise<User[]> => {
    return axios.get(`${baseURL}/subscribers`)
    .then(res => res.data.map((user: User) => {
       return {
           id: user.id,
           name: user.name,
           email: user.email
       }
    }) as User[]
    );
 };

const sendNewsNotifications = async(subscribersList: User[], message: string): Promise<void> => {
    for (const subscriber of subscribersList) {
        const body: Notification = {
            subscriberId: subscriber.id,
            message
        };

        await axios.post(`${baseURL}/notifications`, body)
            .then(() => {console.log(`Notificação enviada para ${body.subscriberId}`)})
            .catch(() => {console.log(`Erro ao enviar notificação para ${body.subscriberId}`)});
    };
};

const main = async (): Promise<void> => {
    try {
        const allSubscribers: User[] = await getSubscribers();
        await sendNewsNotifications(allSubscribers, "Confira as últimas notícias do Labenews!");       
    } catch (error: any) {
       console.log(error.response?.data || error.message);
    };
 };
 
 main();