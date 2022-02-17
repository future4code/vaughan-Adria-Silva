import React from "react";
import { useTripsListRequest } from "../../assets/getTrips";
import ButtonBackPage from "../../components/buttonBackPage/ButtonBackPage";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/protectedPage";
import axios from "axios";
import { URL_BASE } from "../../constants/urlBase";
import { contentType } from "../../constants/headers.js";

export default function AdminHomePage () {
    useProtectedPage();
    const navigate = useNavigate();
    const [trips, isLoadingTrips, errorTrips, listReloader] = useTripsListRequest();

    const tripsList = trips && trips.map((trip) => {
        return (
            <li key={trip.id}>
                <h3 onClick={() => goToDetailsTrip(trip.id)}>{trip.name}</h3>
                <button onClick={() => deleteTrip(trip.id)}>Delete</button>
            </li>
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
                console.log(error);
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
        <div>AdminHomePage
            {isLoadingTrips && <p>Carregando destinos ...</p>}
            {!isLoadingTrips && errorTrips && <p>Desculpe-nos, ocorreu um erro inesperado. Por favor, tente novamente mais tarde.</p>}
            {!isLoadingTrips && trips && trips.length === 0 && <p>Lista de destinos indisponíveis</p>} 
            {!isLoadingTrips && trips && <ul>{tripsList}</ul>}
            <button onClick={goToHomePage}>Voltar</button>
            <button onClick={goToCreateTripPage}>Criar novo destino</button>
            <button onClick={logout}>Logout</button>
        </div>
    );
};