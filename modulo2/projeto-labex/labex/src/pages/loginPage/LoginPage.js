import React, { useEffect } from "react";
import { useForm } from "../../hooks/handleInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { contentType } from "../../constants/headers";
import { URL_BASE } from "../../constants/urlBase";

export default function LoginPage () {
    const navigate = useNavigate();
    const { form, onChangeForm, cleanFields } = useForm(
        {
            email: "",
            password: ""        
        }
    );

    let token = localStorage.getItem("token");
    useEffect(() => {
        if (token) {
            navigate("/admin/trips/list");
        }
    }, [token]);
    
    const login = async (event) => {
        event.preventDefault();

        const headersConfig = {
            headers: contentType
        };

        try {
            const response = await axios.post(`${URL_BASE}/login`, form, headersConfig);
            token = localStorage.setItem("token", response.data.token);
            // console.log(token)
            cleanFields();           
        } catch (error) {
            alert("Desculpe-nos! Ocorreu um erro com o seu login. Por favor, tente novamente mais tarde.")
        };
    }

    const goToHomePage = () => navigate("/");

    return (
        <div>LoginPage
            <form onSubmit={login}>
                <input
                    name={"email"}
                    value={form.email}
                    onChange={onChangeForm}
                    placeholder="seuemail@exemplo.com"
                    type={"email"}
                    pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"}
                    required                
                />
                <input
                    name={"password"}
                    value={form.password}
                    onChange={onChangeForm}
                    placeholder="senha"
                    type={"password"}
                    pattern={"^.{3,}"}
                    title={"Sua senha deve ter no mínimo 3 caracteres"}
                    required                
                />
                <button>Entrar</button>
            </form>
            <button onClick={goToHomePage}>Voltar</button>
        </div>
    );
};