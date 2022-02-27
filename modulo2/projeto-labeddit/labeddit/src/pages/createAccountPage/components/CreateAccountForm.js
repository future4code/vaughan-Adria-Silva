import { TextField, Button } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import { signUp } from "../../../services/users";
import styled from "styled-components";

const Form = styled.form`
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const CreateAccountForm = ({setLogInOut}) => {
    const { form, onChangeForm, cleanFields } = useForm(
        {
            username: "",
            email:"",
            password: ""
        }
    );

    const navigate = useNavigate();

    const onSubmitForm = event => {
        event.preventDefault();
        signUp(form, cleanFields, navigate, setLogInOut);
    };

    return (
            <Form onSubmit={onSubmitForm}>
                <TextField
                    name={"username"}
                    type={"username"}
                    value={form.username}
                    onChange={onChangeForm}
                    label={"Nome de usuário(a)"}
                    placeholder={"Nome"}
                    variant={"outlined"}
                    autoFocus
                    required
                    margin={"normal"}
                    fullWidth
                />
                <TextField
                    name={"email"}
                    type={"email"}
                    value={form.email}
                    onChange={onChangeForm}
                    label={"E-mail"}
                    placeholder={"seu_email@exemplo.com"}
                    variant={"outlined"}
                    inputProps={{ pattern:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$", title:"seuemail@exemplo.com" }}
                    required
                    margin={"normal"}
                    fullWidth
                />
                <TextField
                    name={"password"}
                    type={"password"}
                    value={form.password}
                    onChange={onChangeForm}
                    label={"Senha"}
                    placeholder={"********"}
                    variant={"outlined"}
                    helperText={"Mín 8 e máx 30 caracteres"}
                    inputProps={{ pattern:"^[^ ]{8,30}$", title:"Mínimo 8 e máx 30 caracteres sem espaço" }}
                    required
                    margin={"normal"}
                    fullWidth
                />
                <Button
                    type={"submit"}
                    variant={"contained"}
                    color={"primary"}
                >
                    Criar conta
                </Button>
            </Form>
    );
};

export default CreateAccountForm;