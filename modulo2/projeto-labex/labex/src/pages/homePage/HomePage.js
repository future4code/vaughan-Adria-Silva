import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage () {
    const navigate = useNavigate();

    const goToListTripsPage = () => {
        navigate("/trips/list");
    }

    const goToLoginPage = () => {
        navigate("/login")
    }
    return (
        <div>HomePage
        <button onClick={goToListTripsPage}>Ver Destinos</button>
        <button onClick={goToLoginPage}>Área de Admin</button>
        </div>
    );
};