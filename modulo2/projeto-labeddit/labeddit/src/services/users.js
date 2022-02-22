import axios from "axios";
import { URL_BASE } from "../constants/url.js";
import { contentType } from "../constants/headers.js";
import { goToFeed } from "../routes/coordinator.js";

const simpleHeaders = {
    headers: contentType
}

export const login = async (body, clearInputs, navigate) => {

    try {
        const response = await axios.post(`${URL_BASE}/users/login`, body, simpleHeaders);
        localStorage.setItem("token", response.data.token);
        clearInputs();
        goToFeed(navigate);
    } 
    catch (error) {
        alert("Desculpe-nos! Ocorreu algum erro ao fazer o login. Por favor, tente novamente mais tarde.");
    };
};

export const signUp = async (body, clearInputs, navigate) => {
    try {
        const response = await axios.post(`${URL_BASE}/users/signup`, body, simpleHeaders);
        localStorage.setItem("token", response.data.token);
        clearInputs();
        goToFeed(navigate);
    } catch (error) {
        alert("Desculpe-nos! Algum erro ocorreu ao criar uma nova conta. Por favor, tente novamente mais tarde.");
    };
};