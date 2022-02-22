import { TextField, Button } from "@material-ui/core";
import React from "react";
import useForm from "../../../hooks/useForm";

const CreateAccountForm = () => {
    const { form, onChangeForm, cleanFields } = useForm(
        {
            username: "",
            email:"",
            password: ""
        }
    );

    const onSubmitForm = event => {
        event.preventDefault();
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
                    pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"}
                    required
                />
                <TextField
                    name={"password"}
                    type={"password"}
                    value={form.password}
                    onChange={onChangeForm}
                    label={"Senha"}
                    variant={"outlined"}
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