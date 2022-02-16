import React from "react";
import { useInput } from "../../hooks/handleInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { contentType } from "../../constants/headers";
import { URL_BASE } from "../../constants/urlBase";
import ButtonBackPage from "../../components/buttonBackPage/ButtonBackPage";

export default function LoginPage () {
    const navigate = useNavigate();
    const [email, inputEmail] = useInput("text", "seuemail@exemplo.com" );
    const [password, inputPassword] = useInput("password", "senha" );

    const login = async () => {
        const headersConfig = {
            headers: contentType
        };

        const body = {
            email: email,
            password: password
        }

        try {
            const response = await axios.post(`${URL_BASE}/login`, body, headersConfig);
            localStorage.setItem("token", response.data.token);
            console.log(localStorage.getItem("token"));
        } catch (error) {
            console.log(error);
        };
    }

    return (
        <div>LoginPage
            {inputEmail}
            {inputPassword}
            <ButtonBackPage />
            <button onClick={login}>Entrar</button>
        </div>
    );
};