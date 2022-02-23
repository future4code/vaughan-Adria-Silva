import React, { useEffect } from "react";
import { useForm } from "../../hooks/handleInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { contentType } from "../../constants/headers";
import { URL_BASE } from "../../constants/urlBase";
import { MainContainer, InputType, SubmitButton, Fieldset } from "./Styles";
import { Button } from "../../components/buttonBackPage/style";

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
            cleanFields();           
        } catch (error) {
            alert("Desculpe-nos! Ocorreu um erro com o seu login. Por favor, tente novamente mais tarde.")
        };
    }

    const goToHomePage = () => navigate("/");

    return (
        <MainContainer>
            <h2>Login</h2>
            <form onSubmit={login}>
                <Fieldset>
                    <label id="email">Email:</label>
                    <InputType
                        id={"email"}
                        name={"email"}
                        value={form.email}
                        onChange={onChangeForm}
                        placeholder="email_admin@exemplo.com"
                        type={"email"}
                        pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"}
                        required                
                    />
                    <label id="password">Senha:</label>
                    <InputType
                        id="password"
                        name={"password"}
                        value={form.password}
                        onChange={onChangeForm}
                        placeholder="senha"
                        type={"password"}
                        pattern={"^.{3,}"}
                        title={"Sua senha deve ter no mínimo 3 caracteres"}
                        required                
                    />
                    <SubmitButton>Entrar</SubmitButton>
                </Fieldset>
            </form>
            <Button onClick={goToHomePage}>Voltar</Button>
        </MainContainer>
    );
};