import axios from "axios"
import { baseURL } from "./baseURL"

type User = {
	id: string;
	name: string;
	email: string;
};

// Exercício 3

// a) Testei e não deu erro.

// b) Já que Typescript é uma linguagem fortemente tipada, é uma boa prática
//fazer o mapeamento para garantir que a função retorne exatamente do tipo 
//esperado.

// c)

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
 
 const main = async (): Promise<void> => {
    try {
       const allSubscribers = await getSubscribers();
       console.log(allSubscribers );
    } catch (error: any) {
       console.log(error.response?.data || error.message);
    };
 };
 
 main();
