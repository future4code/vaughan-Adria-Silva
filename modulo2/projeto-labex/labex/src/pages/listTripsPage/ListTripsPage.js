import React from "react";
import { useNavigate } from "react-router-dom";

export default function ListTripsPage () {
    let navigate = useNavigate();


    const goToApplicationFormPage = () => {
        navigate("/trips/application")
    }
    return (
        <div>ListTripsPage
            <button onClick={() => navigate(-1)}>Voltar</button>
            <button onClick={goToApplicationFormPage} >Inscrever-se</button>
        </div>
    );
};