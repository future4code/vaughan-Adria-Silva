import React from "react";
import { useNavigate } from "react-router-dom";
import { useTripsListRequest } from "../../assets/getTrips";
import planet from "../../assets/planet.png";
import hourglass from "../../assets/hourglass.png";
import calendar from "../../assets/calendar.png";
import ButtonBackPage from "../../components/buttonBackPage/ButtonBackPage";
import { MainContainer, CardTrip, CardTitle, CardInfo, CardsContainer, SubscribeButton, Message  } from "./Styles";

export default function ListTripsPage () {
    const [trips, isLoadingTrips, errorTrips] = useTripsListRequest();
    const navigate = useNavigate();
    
    const tripsList = trips && trips.map((trip) => {
        return (
            <CardTrip key={trip.id}>
                <CardTitle>
                    <h3>{trip.name}</h3>
                    <p>{trip.description}</p>
                </CardTitle>
                <CardInfo>
                    <img src={planet} alt="Ícone de planeta" />
                    <p><strong>Planeta:</strong> {trip.planet}</p>
                </CardInfo>
                <CardInfo>
                    <img src={calendar} alt="Ícone de planeta" />
                    <p><strong>Duração da viagem: </strong> {trip.durationInDays} dias</p>
                </CardInfo>
                <CardInfo>
                    <img src={hourglass} alt="Ícone de planeta" />
                    <p><strong>Disponível até:</strong>: {trip.date}</p>
                </CardInfo>
            </CardTrip>);
    });

    const goToApplicationFormPage = () => navigate("/trips/application");

    return (
        <MainContainer>
            <h2>Confira os nossos Destinos</h2>
            <SubscribeButton onClick={goToApplicationFormPage} >Inscreva-se</SubscribeButton>
            <CardsContainer>
                {isLoadingTrips && <Message>Carregando destinos ...</Message>}
                {!isLoadingTrips && errorTrips && <Message>Desculpe-nos, ocorreu um erro inesperado. Por favor, tente novamente mais tarde.</Message>}
                {!isLoadingTrips && trips && trips.length === 0 && <Message>Não há destinos disponíveis</Message>} 
                {!isLoadingTrips && trips && <>{tripsList}</>}
            </CardsContainer>
            <ButtonBackPage />
        </MainContainer>
    );
};