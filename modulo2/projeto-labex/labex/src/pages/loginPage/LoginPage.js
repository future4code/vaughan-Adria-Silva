import React, { useEffect } from "react";
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
    let token = localStorage.getItem("token")
    console.log(token);

    useEffect(() => {
        if (token) {
            navigate("/admin/trips/list");
        }
    }, [token]);
    
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
            token = localStorage.setItem("token", response.data.token);
            navigate("/admin/trips/list");           
        } catch (error) {
            console.log(error);
        };
    }

    const goToHomePage = () => navigate("/");

    return (
        <div>LoginPage
            {inputEmail}
            {inputPassword}
            <button onClick={goToHomePage}>Voltar</button>
            <button onClick={login}>Entrar</button>
        </div>
    );
};