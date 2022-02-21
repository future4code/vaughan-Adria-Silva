import React from "react";
import { useTripsListRequest } from "../../hooks/getTrips";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/protectedPage";
import axios from "axios";
import { URL_BASE } from "../../constants/urlBase";
import { contentType } from "../../constants/headers.js";
import { Button } from "../../components/buttonBackPage/style.js";
import cancel from "../../assets/delete.png";
import { MainContainer, CardsContainer, CardTrip, ButtonsContainer, Message } from "./Styles";

export default function AdminHomePage () {
    useProtectedPage();
    const navigate = useNavigate();
    const [trips, isLoadingTrips, errorTrips, listReloader] = useTripsListRequest();

    const tripsList = trips && trips.map((trip) => {
        return (
            <CardTrip key={trip.id}>
                <h3 onClick={() => goToDetailsTrip(trip.id)}>{trip.name}</h3>
                <button onClick={() => deleteTrip(trip.id)}>
                    <img src={cancel} alt="Botão de deletar distino da lista"/>
                </button>
            </CardTrip>
        );
    });

    const deleteTrip = async (id) => {
        const deleteConfirmation = "Tem certeza de que deseja deletar este destino?"
        
        if (window.confirm(deleteConfirmation) === true) {
            const headersConfig = {
                headers: {
                    contentType,
                    auth: localStorage.getItem("token")
                }
            };

            try {
                const response = await axios.delete(`${URL_BASE}/trips/${id}`, headersConfig);
                listReloader();
            } catch (error) {
                alert("Desculpe-nos! Ocorreu um erro ao deletar este destino. Por favor, tente novamente mais tarde.");
            };
        }
    }

    const goToDetailsTrip = (id) => navigate(`/admin/trips/${id}`);

    const goToCreateTripPage = () => navigate("/admin/trips/create");

    const goToHomePage = () => navigate("/");

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }

    return (
        <MainContainer>
            <h2>Painel Administrativo</h2>
            <CardsContainer>
                {isLoadingTrips && <Message>Carregando destinos ...</Message>}
                {!isLoadingTrips && errorTrips && <Message>Desculpe-nos, ocorreu um erro inesperado. Por favor, tente novamente mais tarde.</Message>}
                {!isLoadingTrips && trips && trips.length === 0 && <Message>Lista de destinos indisponíveis</Message>} 
                {!isLoadingTrips && trips && tripsList}
            </CardsContainer>
            <ButtonsContainer>
                <button onClick={goToCreateTripPage}>Criar novo destino</button>
                <button id="logout" onClick={logout}>Logout</button>
            </ButtonsContainer>
            <Button onClick={goToHomePage}>Voltar</Button>
        </MainContainer>
    );
};