import axios from "axios"
import { baseURL } from "./baseURL"

// Exercício 4
// a) Deve ser uma função assíncrona para não esperar a conclusão dessa
//função para executar os próximos comandos;

// b)

type News = {
    title: string,
    content: string,
    date: number
}

const newNews: News = {
	title: "Hamilton saiu do Frontend",
	content: "Para a alegria de muitos, e a tristeza de alguns, a turma Hamilton está, agora, no backend!",
	date: Date.now()
};

const createNews = async (news: News): Promise<any>=> {
    return axios.put(`${baseURL}/news`, news);
};

const main = async (): Promise<void> => {
    try {
       await createNews(newNews);
    } catch (error: any) {
       console.log(error.response?.data || error.message);
    };
 };
 
 main();