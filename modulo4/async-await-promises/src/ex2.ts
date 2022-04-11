import axios from "axios"
import { baseURL } from "./baseURL"

// Exercício 2

 // a) A diferença é muito pouca. Em arrow funciton, getSubscribers é uma 
 //variável que recebe a resposta de uma função. Nesse caso a palavra
 //reservada async deve vir antes dos parâmetros dessa função, em (), e a 
 //tipagem do retorno deve vir logo depois dos (), assim como na função
 //nomeada.


 // b) Reescrevendo a função abaixo em arrow function:

//   async function getSubscribers (): Promise<any[]> {
//      return axios
//      .get(`${baseURL}/subscribers`)
//      .then(res => res.data);  
//   };

const getSubscribers = async(): Promise<any[]> => {
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