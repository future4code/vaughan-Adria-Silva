import axios from "axios";
import { URL_BASE } from "../constants/url.js";
import { contentType } from "../constants/headers.js";
import { goToFeed } from "../routes/coordinator.js";

export const login = async (body, clearInputs, navigate) => {
    const headersConfig = {
        headers: contentType
    }

    try {
        const response = await axios.post(`${URL_BASE}/users/login`, body, headersConfig);
        localStorage.setItem("token", response.data.token);
        clearInputs();
        goToFeed(navigate);
    } 
    catch (error) {
        alert("Desculpe-nos! Ocorreu algum erro ao fazer o login. Por favor, tente novamente mais tarde.");
    };
};