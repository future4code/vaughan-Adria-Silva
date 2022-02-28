import React, { useState } from "react";
import { TextField, Button, CircularProgress } from "@mui/material";
import useForm from "../../../../hooks/useForm";
import { createPost } from "../../../../services/posts";
import { Form } from "./styles";

const NewPostForm = ({listReoadController}) => {
    const { form, onChangeForm, cleanFields } = useForm(
        {
            title: "",
            body: ""
        }
    );
    const [isLoading, setIsLoading] = useState(false);

    const onSubmitForm = event => {
        event.preventDefault();
        createPost(form, cleanFields, listReoadController, setIsLoading);
    };

    return (
        <Form onSubmit={onSubmitForm}>
            <TextField
                type={"text"}
                name={"title"}
                value={form.title}
                onChange={onChangeForm}
                variant={"outlined"}
                label={"Título"}
                placeholder={"Título da publicação"}
                required
                fullWidth
                margin="normal"
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
                rows={2}
                required
                fullWidth
                margin="normal"
            />
            <Button
                    type={"submit"}
                    variant={"contained"}
                    sx={{margin:"1rem", width:"100px"}}
                >
                    {isLoading ? <CircularProgress color="inherit" size="1.5rem" /> : <>Publicar</>}
                </Button>
        </Form>
    );
};

export default NewPostForm;