import React from "react";
import { useParams } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import { createComment } from "../../../services/posts";
import { TextField, Button } from "@mui/material";

const NewCommentForm = ({listReoadController}) => {
    const params = useParams();
    const { form, onChangeForm, cleanFields } = useForm({ body: "" });

    const onSubmitForm = (event) => {
        event.preventDefault();
        createComment(params.id, form, cleanFields, listReoadController);
    };

    return (
        <form onSubmit={onSubmitForm}>
            <TextField
                type={"text"}
                name={"body"}
                value={form.body}
                onChange={onChangeForm}
                variant={"outlined"}
                label={"Comentário"}
                placeholder={"Adicione um comentário"}
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

export default NewCommentForm;