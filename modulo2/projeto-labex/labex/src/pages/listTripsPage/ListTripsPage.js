import React from "react";
import { useNavigate } from "react-router-dom";
import { useTripsListRequest } from "../../assets/getTrips";
import ButtonBackPage from "../../components/buttonBackPage/ButtonBackPage";

export default function ListTripsPage () {
    const [trips, isLoadingTrips, errorTrips] = useTripsListRequest();
    const navigate = useNavigate();
    
    const tripsList = trips && trips.map((trip) => {
        return (
            <div key={trip.id}>
                <h3>{trip.name}</h3>
                <p>{trip.description}</p>
                <p><strong>Planeta:</strong> {trip.planet}</p>
                <p><strong>Data da partida</strong>: {trip.date}</p>
                <p><strong>Duração: </strong> {trip.durationInDays} dias</p>
            </div>);
    });

    const goToApplicationFormPage = () => navigate("/trips/application");

    return (
        <div>ListTripsPage
            {isLoadingTrips && <p>Carregando destinos ...</p>}
            {!isLoadingTrips && errorTrips && <p>Desculpe-nos, ocorreu um erro inesperado. Por favor, tente novamente mais tarde.</p>}
            {!isLoadingTrips && trips && trips.length === 0 && <p>Não há destinos disponíveis</p>} 
            {!isLoadingTrips && trips && <>{tripsList}</>}
            <ButtonBackPage />
            <button onClick={goToApplicationFormPage} >Inscrever-se</button>
        </div>
    );
};