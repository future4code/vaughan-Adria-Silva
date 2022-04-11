import axios from "axios"
import { baseURL } from "./baseURL"

// Exercício 2

// async function getSubscribers (): Promise<any[]> {
    // const response = await axios.get(`${baseURL}/subscribers`);
    // return response.data;
//  };

// b) Reescrevendo a função acima em arrow function:
 const getSubscribers = async(): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
 };

 // a) A diferença é muito pouca. Em arrow funciton, getSubscribers é uma 
 //variável que recebe a resposta de uma função. Nesse caso a palavra
 //reservada async deve vir antes dos parâmetros dessa função, em (), e a 
 //tipagem do retorno deve vir logo depois dos (), assim como na função
 //nomeada.

