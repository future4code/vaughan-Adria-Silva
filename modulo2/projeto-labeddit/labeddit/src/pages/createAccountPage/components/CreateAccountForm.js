import { TextField, Button } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import { signUp } from "../../../services/users";

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
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={"username"}
                    type={"username"}
                    value={form.username}
                    onChange={onChangeForm}
                    label={"Nome de usuário(a)"}
                    variant={"outlined"}
                    autoFocus
                    required
                />
                <TextField
                    name={"email"}
                    type={"email"}
                    value={form.email}
                    onChange={onChangeForm}
                    label={"E-mail"}
                    variant={"outlined"}
                    inputProps={{ pattern:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$", title:"seuemail@exemplo.com" }}
                    required
                />
                <TextField
                    name={"password"}
                    type={"password"}
                    value={form.password}
                    onChange={onChangeForm}
                    label={"Senha"}
                    variant={"outlined"}
                    helperText={"Mín 8 e máx 30 caracteres"}
                    inputProps={{ pattern:"^[^ ]{8,30}$", title:"Mínimo 8 e máx 30 caracteres sem espaço" }}
                    required
                />
                <Button
                    type={"submit"}
                    variant={"contained"}
                    color={"primary"}
                >
                    Criar conta
                </Button>
            </form>
    );
};

export default CreateAccountForm;