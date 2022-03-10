import React from "react";
import error from "../../assets/error.png"
import { MainContainer } from "./styles";

const ErrorPage = () => {
    return (
        <MainContainer>
            <img src={error} alt="Ícone de erro 404 "/>
            <h4>Erro 404 - Página não encontrada</h4>
        </MainContainer>
    );
};

export default ErrorPage;