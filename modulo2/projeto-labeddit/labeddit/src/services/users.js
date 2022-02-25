import axios from "axios";
import { URL_BASE } from "../constants/url.js";
import { headersContentType } from "../constants/headers.js";
import { goToFeed } from "../routes/coordinator.js";


export const login = async (body, clearInputs, navigate, setLogInOut) => {

    try {
        const response = await axios.post(`${URL_BASE}/users/login`, body, headersContentType);
        localStorage.setItem("token", response.data.token);
        clearInputs();
        goToFeed(navigate);
        setLogInOut("Logout");
    } 
    catch (error) {
        alert("Desculpe-nos! Ocorreu algum erro ao fazer o login. Por favor, tente novamente mais tarde.");
    };
};

export const signUp = async (body, clearInputs, navigate, setLogInOut) => {
    try {
        const response = await axios.post(`${URL_BASE}/users/signup`, body, headersContentType);
        localStorage.setItem("token", response.data.token);
        clearInputs();
        goToFeed(navigate);
        setLogInOut("Logout");
    } catch (error) {
        alert("Desculpe-nos! Algum erro ocorreu ao criar uma nova conta. Por favor, tente novamente mais tarde.");
    };
};