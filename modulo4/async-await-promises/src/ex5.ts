import axios from "axios"
import { baseURL } from "./baseURL"

type user = {
	id: string;
	name: string;
	email: string;
};

type Notification = {
    subscriberId: string,
    message: string
};


const sendNewsNotification = async(subscribersList: user[], message: string): Promise<void> => {
    for (const subscriber of subscribersList) {
        const body = {
            subscriberId: subscriber.id,
            message
        };
        await axios.post(`${baseURL}/notification`, body);
    };
};