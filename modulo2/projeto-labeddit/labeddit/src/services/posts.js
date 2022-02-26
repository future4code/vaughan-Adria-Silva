import { URL_BASE } from "../constants/url";
import { completeHeaders, headersAuthorization } from "../constants/headers";
import axios from "axios";


export const createPost = async (body, clearInputs, listReoadController) => {

    try {
        const response = await axios.post(`${URL_BASE}/posts`, body, completeHeaders);
        clearInputs();
        listReoadController();
    } catch (error) {
        alert("Desculpe-nos! Algo deu errado com a publicação. Por favor, tente novamente mais tarde.")
    };
};

export const createPostVote = async (id, body) => {
    try {
        const response = await axios.post(`${URL_BASE}/posts/${id}/votes`, body, completeHeaders);
    } catch (error) {
        alert("Desculpe-nos! Algo deu errado ao processar o seu like/deslike. Por favor, tente novamente mais tarde.");
    };
};

export const changePostVote = async (id, body) => {
    try {
        const response = await axios.put(`${URL_BASE}/posts/${id}/votes`, body, completeHeaders);
    } catch (error) {
        alert("Desculpe-nos! Algo deu errado ao processar mudar o seu like. Por favor, tente novamente mais tarde.");
    };
};

export const deletePostVote = async (id) => {
    try {
        const response = await axios.delete(`${URL_BASE}/posts/${id}/votes`,  headersAuthorization);
    } catch (error) {
        alert("Desculpe-nos! Algo deu errado ao deletar o seu like. Por favor, tente novamente mais tarde.");
    };
};
