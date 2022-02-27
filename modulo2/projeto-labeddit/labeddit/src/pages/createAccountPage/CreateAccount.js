import { Typography } from "@mui/material";
import React from "react";
import useUnProtectedPage from "../../hooks/useUnProtectedPage";
import CreateAccountForm from "./components/CreateAccountForm";
import styled from "styled-components";

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

const CreateAccountPage = ({setLogInOut}) => {
    useUnProtectedPage();

    return (
        <MainContainer>
            <Title variant='h1' color={"primary"}>labeddit</Title>
            <Typography variant='h4' color={"text.primary"}>Crie uma conta</Typography>
            <CreateAccountForm setLogInOut={setLogInOut}/>
        </MainContainer>
    );
};

export default CreateAccountPage;