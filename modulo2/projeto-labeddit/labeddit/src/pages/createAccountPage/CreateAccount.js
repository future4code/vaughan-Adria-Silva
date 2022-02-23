import React from "react";
import useUnProtectedPage from "../../hooks/useUnProtectedPage";
import CreateAccountForm from "./components/CreateAccountForm";

const CreateAccountPage = ({setLogInOut}) => {
    useUnProtectedPage();

    return (
        <div>
            <h2>Crie uma conta</h2>
            <CreateAccountForm setLogInOut={setLogInOut}/>
        </div>
    );
};

export default CreateAccountPage;