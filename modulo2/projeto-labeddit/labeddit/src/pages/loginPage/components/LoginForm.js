import useForm from "../../../hooks/useForm.js";
import { Button, TextField } from "@material-ui/core";

const LoginForm = () => {
    const { form, onChangeForm, cleanFields } = useForm(
        {
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
                    Entrar
                </Button>
            </form>
    );
};

export default LoginForm;