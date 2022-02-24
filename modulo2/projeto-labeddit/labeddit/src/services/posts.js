import { URL_BASE } from "../constants/url";
import { contentType } from "../constants/headers";
import axios from "axios";

const completeHeaders = {
    headers: {
        contentType,
        Authorization: localStorage.getItem("token")
    }
};

const headersAuthorization = {
    headers: { Authorization: localStorage.getItem("token") }
};

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

export const getPostComments = async (id) => {
    try {
        const response = await axios.get(`${URL_BASE}/posts/${id}/comments`, headersAuthorization);
        console.log(response);
    } catch (error) {
        console.log(error);
    };
};