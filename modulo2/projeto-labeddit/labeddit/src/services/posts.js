import { URL_BASE } from "../constants/url";
import { completeHeaders, headersAuthorization } from "../constants/headers";
import axios from "axios";


export const createPost = async (body, clearInputs, listReoadController) => {

    try {
        const response = await axios.post(`${URL_BASE}/posts`, body, completeHeaders);
        alert("Publicado!");
        clearInputs();
        listReoadController();
    } catch (error) {
        alert("Desculpe-nos! Algo deu errado com a publicação. Por favor, tente novamente mais tarde.")
    };
};

export const createPostVote = async (id, body) => {
    try {
        const response = await axios.post(`${URL_BASE}/posts/${id}/votes`, body, completeHeaders);
        console.log(response);
    } catch (error) {
        console.log(error);
    };
};

export const changePostVote = async (id, body) => {
    try {
        const response = await axios.put(`${URL_BASE}/posts/${id}/votes`, body, completeHeaders);
        console.log(response);
    } catch (error) {
        console.log(error);
    };
};

export const deletePostVote = async (id) => {
    try {
        const response = await axios.delete(`${URL_BASE}/posts/${id}/votes`,  headersAuthorization);
        console.log(response);
    } catch (error) {
        console.log(error);
    };
};


///////Comments////////

export const getPostComments = async (id, setCommentsList) => {
    try {
        const response = await axios.get(`${URL_BASE}/posts/${id}/comments`, headersAuthorization);
        setCommentsList(response.data);
    } catch (error) {
        alert("Desculpe-nos! Ocorreu um erro ao carregar os comentários do post. Por favor, tente novamente mais tarde.");
    };
};

export const createComment = async (id, body, clearInputs, listReoadController) => {
    try {
        const response = await axios.post(`${URL_BASE}/posts/${id}/comments`, body, completeHeaders);
        clearInputs();
        listReoadController();
    } catch (error) {
        alert("Desculpe-nos! Ocorreu um erro ao publicar o comentário. Por favor, tente novamente mais tarde.");
    };
};