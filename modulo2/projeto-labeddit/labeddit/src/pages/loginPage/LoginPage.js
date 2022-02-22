import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import useUnProtectedPage from "../../hooks/useUnProtectedPage.js";
import { goToSignUp } from "../../routes/coordinator.js";
import LoginForm from "./components/LoginForm.js";

const LoginPage = () => {
    useUnProtectedPage();
    const navigate = useNavigate();

    return (
        <div> LoginPage
            <LoginForm />
            <Button
                onClick={() => goToSignUp(navigate)}
                variant={"text"}
                color={"primary"}
            >
                Ainda não possui conta? Crie uma conta
            </Button>
        </div>
    );
};

export default LoginPage;