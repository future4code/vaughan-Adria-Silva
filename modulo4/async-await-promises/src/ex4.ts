import axios from "axios"
import { baseURL } from "./baseURL"

type News = {
    title: string,
    content: string,
    date: number
}

const newNews = {
	title: "Hamilton saiu do Frontend",
	content: "Para a alegria de muitos, e a tristeza de alguns, a turma Hamilton está, agora, no backend!",
	date: 1589818936000
};

// Exercício 4
// a) Deve ser uma função assíncrona para não esperar a conclusão dessa
//função para executar os próximos comandos;

// b)
const createNews = async (news: News): Promise<void>=> {
    await axios.put(`${baseURL}/news`, news);
};