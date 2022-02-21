import React, { useEffect } from "react";
import { useForm } from "../../hooks/handleInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { contentType } from "../../constants/headers";
import { URL_BASE } from "../../constants/urlBase";
import styled from "styled-components";
import { Button } from "../../components/buttonBackPage/style";

const MainContainer = styled.main`
    margin: 0 auto;
    width: 70vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        font-size: xx-large;
        color: white;
        text-shadow: 4px 4px 25px #0a121f;
        text-align: center;
        margin: 32px 8px;
    }

    @media(max-width: 480px) {
        width: 90vw;
    }
`

const InputType = styled.input`
    padding: 8px;
    margin: 8px 0;
    height: 1.5rem;
    width: 300px;
    font-size: 18px;
    border-radius: 16px;
    border: none;
`

const Fieldset = styled.fieldset`
    width: 70%;
    margin: 0 auto;;
    padding: 8px;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-shadow: 10px 8px 2rem #0a121f;
    
    label {
        margin-left: 4px;
        color: white;
        text-shadow: 4px 4px 15px #0a121f;
    }
`

const SubmitButton = styled.button`
    font-size: larger;
    font-weight: bold;
    width: 200px;
    height: 40px;
    margin: 8px auto;
    border: solid white;
    border-radius: 24px;
    background-color: #0a121f;
    color: white;
    cursor: pointer;
    
    &:hover {
        background-color: white;
        color: #0a121f;
        border: solid #0a121f;
    }
`

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