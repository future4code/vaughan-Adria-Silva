import useForm from "../../../../hooks/useForm.js";
import { Button, TextField, CircularProgress } from '@mui/material';
import { login } from "../../../../services/users.js";
import { useNavigate } from "react-router-dom";
import { Form } from "./styles.js";
import { useState } from "react";

const LoginForm = ({setLogInOut}) => {
    const { form, onChangeForm, cleanFields } = useForm(
        {
            email:"",
            password: ""
        }
    );
    const [isLoading, setIsloading] = useState(false);

    const navigate = useNavigate();

    const onSubmitForm = event => {
        event.preventDefault();
        login(form, cleanFields, navigate, setLogInOut, setIsloading);
    };

    return (
        <Form onSubmit={onSubmitForm}>
                <TextField
                    name={"email"}
                    type={"email"}
                    value={form.email}
                    onChange={onChangeForm}
                    label={"E-mail"}
                    placeholder={"seu_email@exemplo.com"}
                    variant={"outlined"}
                    inputProps={{ pattern:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$", title:"seuemail@exemplo.com" }}
                    autoFocus
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
                    sx={{margin:"1rem", width:"100px"}}
                >
                    {isLoading ? <CircularProgress color="inherit" size="1.5rem" /> : <>Entrar</>}
                </Button>
            </Form>
    );
};

export default LoginForm;