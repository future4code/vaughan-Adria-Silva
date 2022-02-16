import React from "react";
import { useNavigate } from "react-router-dom";
import { useTripsListRequest } from "../../assets/getTrips";

export default function ListTripsPage () {
    const [trips, isLoadingTrips, errorTrips] = useTripsListRequest();
    const navigate = useNavigate();

    // console.log("trips", trips);
    // console.log("loading", i);
    // console.log("error", errorTrips);
    
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

    const goToApplicationFormPage = () => {
        navigate("/trips/application")
    }

    return (
        <div>ListTripsPage
            {isLoadingTrips && <p>Carregando destinos ...</p>}
            {!isLoadingTrips && errorTrips && <p>Desculpe-nos, ocorreu um erro inesperado. Por favor, tente novamente mais tarde.</p>}
            {!isLoadingTrips && trips && trips.length === 0 && <p>Não há destinos disponíveis</p>} 
            {!isLoadingTrips && trips && <>{tripsList}</>}
            <button onClick={() => navigate(-1)}>Voltar</button>
            <button onClick={goToApplicationFormPage} >Inscrever-se</button>
        </div>
    );
};