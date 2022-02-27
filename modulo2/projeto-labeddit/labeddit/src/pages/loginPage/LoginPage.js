import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';
import { MainContainer, Title } from "./styles.js"
import useUnProtectedPage from "../../hooks/useUnProtectedPage.js";
import { goToSignUp } from "../../routes/coordinator.js";
import LoginForm from "./components/loginForm/LoginForm.js";

const LoginPage = ({setLogInOut}) => {
    useUnProtectedPage();
    const navigate = useNavigate();

    return (
        <MainContainer>
            <Title variant='h1' color={"primary"}>labeddit</Title>
            <LoginForm setLogInOut={setLogInOut} color={"primary"}/>
            <Button
                onClick={() => goToSignUp(navigate)}
                variant={"text"}
            >
                Ainda não possui conta? Crie uma conta
            </Button>
        </MainContainer>
    );
};

export default LoginPage;