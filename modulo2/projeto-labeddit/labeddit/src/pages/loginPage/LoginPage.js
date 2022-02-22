import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { goToSignUp } from "../../routes/coordinator.js";
import LoginForm from "./components/LoginForm.js";

const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <div> LoginPage
            <LoginForm />
            <Button
                    onClick={() => goToSignUp(navigate)}
                    variant={"text"}
                    color={"primary"}
                >
                    Ainda não possui conta? Cadastre-se
                </Button>
        </div>);
};

export default LoginPage;