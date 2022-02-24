import { TextField, Button } from "@mui/material";
import React from "react";
import useForm from "../../../hooks/useForm";
import { createPost } from "../../../services/posts";

const NewPostForm = ({listReoadController}) => {
    const { form, onChangeForm, cleanFields } = useForm(
        {
            title: "",
            body: ""
        }
    );

    const onSubmitForm = event => {
        event.preventDefault();
        createPost(form, cleanFields, listReoadController);
    };

    return (
        <form onSubmit={onSubmitForm}>
            <TextField
                type={"text"}
                name={"title"}
                value={form.title}
                onChange={onChangeForm}
                variant={"outlined"}
                label={"Título"}
                placeholder={"Título da publicação"}
                required
            />
            <TextField
                type={"text"}
                name={"body"}
                value={form.body}
                onChange={onChangeForm}
                variant={"outlined"}
                label={"Conteúdo"}
                placeholder={"Conteúdo da publicação"}
                multiline
                maxRows={3}
                required
            />
            <Button
                    type={"submit"}
                    variant={"contained"}
                >
                    Publicar
                </Button>
        </form>
    );
};

export default NewPostForm;