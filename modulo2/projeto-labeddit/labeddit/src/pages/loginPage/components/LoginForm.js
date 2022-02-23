import useForm from "../../../hooks/useForm.js";
import { Button, TextField } from "@material-ui/core";
import { login } from "../../../services/users.js";
import { useNavigate } from "react-router-dom";

const LoginForm = ({setLogInOut}) => {
    const { form, onChangeForm, cleanFields } = useForm(
        {
            email:"",
            password: ""
        }
    );

    const navigate = useNavigate();

    const onSubmitForm = event => {
        event.preventDefault();
        login(form, cleanFields, navigate, setLogInOut);
    };

    return (
        <form onSubmit={onSubmitForm}>
                <TextField
                    name={"email"}
                    type={"email"}
                    value={form.email}
                    onChange={onChangeForm}
                    label={"E-mail"}
                    variant={"outlined"}
                    inputProps={{ pattern:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$", title:"seuemail@exemplo.com" }}
                    autoFocus
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
                    color="primary"
                >
                    Entrar
                </Button>
            </form>
    );
};

export default LoginForm;