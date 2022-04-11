import axios from "axios"
import { baseURL } from "./baseURL"

type user = {
	id: string;
	name: string;
	email: string;
};

// Exercício 3

// const getSubscribers = async(): Promise<user[]> => {
//     const response = await axios.get(`${baseURL}/subscribers`);
//     return response.data;
//  };

// a)

// b)


// c)
const getSubscribers = async (): Promise<user[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    const mappedResponse = response.data.map((res: any) => {
      return {
        id: res.id,
        name: res.name,
        email: res.email,
      };
    });
    return mappedResponse;
};

getSubscribers();
