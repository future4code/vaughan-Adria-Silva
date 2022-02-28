import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useForm from "../../../../hooks/useForm.js";
import { createComment } from "../../../../services/comments.js";
import { TextField, Button, CircularProgress } from "@mui/material";
import { Form } from "./styles.js";

const NewCommentForm = ({listReoadController, setNumOfComments, numOfComments}) => {
    const params = useParams();
    const { form, onChangeForm, cleanFields } = useForm({ body: "" });
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault();
        createComment(params.id, form, cleanFields, listReoadController, setNumOfComments, numOfComments, setIsLoading);
    };

    return (
        <Form onSubmit={onSubmitForm}>
            <TextField
                type={"text"}
                name={"body"}
                value={form.body}
                onChange={onChangeForm}
                variant={"outlined"}
                label={"Comentário"}
                placeholder={"Adicione um comentário"}
                required
                fullWidth
                multiline
                rows={2}
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

export default NewCommentForm;