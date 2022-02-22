import React from "react";
import useUnProtectedPage from "../../hooks/useUnProtectedPage";
import CreateAccountForm from "./components/CreateAccountForm";

const CreateAccountPage = () => {
    useUnProtectedPage();

    return (
        <div>
            <h2>Crie uma conta</h2>
            <CreateAccountForm />
        </div>
    );
};

export default CreateAccountPage;