import useForm from "../../../hooks/useForm.js";
import { Button, TextField } from "@material-ui/core";
import { login } from "../../../services/users.js";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const { form, onChangeForm, cleanFields } = useForm(
        {
            email:"",
            password: ""
        }
    );

    const navigate = useNavigate();

    const onSubmitForm = event => {
        event.preventDefault();
        login(form, cleanFields, navigate);
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
                    pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"}
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
                    required
                />
                <Button
                    type={"submit"}
                    variant={"contained"}
                    color={"primary"}
                >
                    Entrar
                </Button>
            </form>
    );
};

export default LoginForm;