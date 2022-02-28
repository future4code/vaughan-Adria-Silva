import { URL_BASE } from "../constants/url";
import { completeHeaders, headersAuthorization } from "../constants/headers";
import axios from "axios";

export const getPostComments = async (id, setCommentsList, setNumOfComments, setIsLoading) => {
    setIsLoading(true);
    try {
        const response = await axios.get(`${URL_BASE}/posts/${id}/comments`, headersAuthorization);
        setCommentsList(response.data);
        setNumOfComments(response.data.length);
        setIsLoading(false);
    } catch (error) {
        setIsLoading(false);
        alert("Desculpe-nos! Ocorreu um erro ao carregar os comentários do post. Por favor, tente novamente mais tarde.");
    };
};

export const createComment = async (id, body, clearInputs, listReoadController, setNumOfComments, numOfComments, setIsLoading) => {
    setIsLoading(true);
    try {
        const response = await axios.post(`${URL_BASE}/posts/${id}/comments`, body, completeHeaders());
        setIsLoading(false);
        clearInputs();
        setNumOfComments(numOfComments + 1);
        listReoadController();
    } catch (error) {
        setIsLoading(false);
        alert("Desculpe-nos! Ocorreu um erro ao publicar o comentário. Por favor, tente novamente mais tarde.");
    };
};

export const createCommentVote = async (id, body) => {
    try {
        const response = await axios.post(`${URL_BASE}/comments/${id}/votes`, body, completeHeaders());
    } catch (error) {
        alert("Desculpe-nos! Algo deu errado ao processar o seu like/deslike. Por favor, tente novamente mais tarde.");
    };
};

export const changeCommentVote = async (id, body) => {
    try {
        const response = await axios.put(`${URL_BASE}/comments/${id}/votes`, body, completeHeaders());
    } catch (error) {
        alert("Desculpe-nos! Algo deu errado ao processar mudar o seu like. Por favor, tente novamente mais tarde.");
    };
};

export const deleteCommentVote = async (id) => {
    try {
        const response = await axios.delete(`${URL_BASE}/comments/${id}/votes`, headersAuthorization);
    } catch (error) {
        alert("Desculpe-nos! Algo deu errado ao deletar o seu like. Por favor, tente novamente mais tarde.");
    };
};