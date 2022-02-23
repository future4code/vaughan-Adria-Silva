import React from "react";
import { useNavigate } from "react-router-dom";
import rocketPlanet from "../../assets/rocket-planet.png"
import { MainContainer, Buttons } from "./Styles.js";


export default function HomePage () {
    const navigate = useNavigate();

    const goToListTripsPage = () => {
        navigate("/trips/list");
    }

    const goToLoginPage = () => {
        navigate("/login")
    }
    return (
        <MainContainer>
            <img src={rocketPlanet} alt="Ícone de foguete em um planeta"/>
            <div>
                <Buttons onClick={goToListTripsPage}>Ver Destinos</Buttons>
                <Buttons onClick={goToLoginPage}>Área Admin</Buttons>
            </div>
        </MainContainer>
    );
};