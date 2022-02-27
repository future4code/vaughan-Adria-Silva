import { Button, Typography } from '@mui/material';
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import useUnProtectedPage from "../../hooks/useUnProtectedPage.js";
import { goToSignUp } from "../../routes/coordinator.js";
import LoginForm from "./components/LoginForm.js";

const MainContainer = styled.main`
    height: calc(90vh - 64px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(max-width: 600px) {
        height: calc(90vh - 56px);
    }
`

const Title = styled(Typography)`
    text-align: center;
    text-shadow: 1px 1px 8px #3c3c3c;
    margin: 16px;
`

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