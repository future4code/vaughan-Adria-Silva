import { URL_BASE } from "../constants/url";
import { contentType } from "../constants/headers";
import axios from "axios";

const completeHeaders = {
    headers: {
        contentType,
        Authorization: localStorage.getItem("token")
    }
};

export const createPost = async (body, clearInputs) => {

    try {
        const response = await axios.post(`${URL_BASE}/posts`, body, completeHeaders);
        alert("Publicado!");
        clearInputs();
    } catch (error) {
        alert("Desculpe-nos! Algo deu errado com a publicação. Por favor, tente novamente mais tarde.")
    }
};