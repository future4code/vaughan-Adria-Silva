import axios from "axios"
import { baseURL } from "./baseURL"

// Exercício 1

// a) Endpoint get - https://labenews.herokuapp.com/subscribers retorna todos
//os inscritos.

// b) Toda função assíncrona retorna uma Promisse que espera algum tipo de
//valor. Assim, a tipagem do retorno da função é Promise<any[]>.

// c)

async function getSubscribers (): Promise<any[]> {
   return axios
   .get(`${baseURL}/subscribers`)
   .then(res => res.data);  
};

const main = async () => {
   try {
      const allSubscribers = await getSubscribers();
      console.log(allSubscribers );
   } catch (error: any) {
      console.log(error.response?.data || error.message);
   };
};

main();

