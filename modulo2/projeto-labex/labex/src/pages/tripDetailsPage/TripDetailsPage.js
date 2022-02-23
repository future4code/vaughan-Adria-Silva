import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { URL_BASE } from "../../constants/urlBase.js";
import { contentType } from "../../constants/headers.js";
import { useProtectedPage } from "../../hooks/protectedPage";
import planet from "../../assets/planet.png";
import hourglass from "../../assets/hourglass.png";
import calendar from "../../assets/calendar.png";
import label from "../../assets/label.png";
import description from "../../assets/description.png";
import candidates from "../../assets/candidates.png";
import { MainContainer, CardInfo, CandidateTitle, CandidatesArea, CandidatesCard, DetailCard, ButtonsContainer, Message } from "./Styles.js";
import ButtonBackPage from "../../components/buttonBackPage/ButtonBackPage.js"

export default function TripDetailsPage () {
    useProtectedPage();
    const params = useParams();
    const [detailedTrip, setDetailedTrip] = useState({ "candidates": [], approved:[]})
    const [rechargeList, setRechargeList] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        getTripDetail();
    }, [rechargeList]);
    
    const getTripDetail = async () => {
        setIsLoading(true);

        const headersConfig = {
            headers: { auth: localStorage.getItem("token") }
        };

        try {
            const response = await axios.get(`${URL_BASE}/trip/${params.id}`, headersConfig);
            setDetailedTrip(response.data.trip);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            alert("Desculpe-nos. Algum erro ocorreu ao acessar os detalhes da viagem. Por favor, tente novamente mais tarde.")
        };
    };

    const decideCandidate = async (candidateId, approved) => {
        const headersConfig = {
            headers: {
                contentType,
                auth: localStorage.getItem("token")
            }
        };

        const body = {
            approve: approved
        };

        try {
            const response = await axios.put(
                `${URL_BASE}/trips/${params.id}/candidates/${candidateId}/decide`,
                body,
                headersConfig
            );
            setRechargeList(!rechargeList);                    
        } catch (error) {
            if (approved) {
                alert("Desculpe-nos! Algum problema ocorreu ao aprovar o candidato. Por favor, tente novamente mais tarde.");
            } else {
                alert("Desculpe-nos! Algum problema ocorreu ao reprovar o candidato. Por favor, tente novamente mais tarde.");
            };
        }
    }

    const pendingCandidatesList = detailedTrip.candidates && detailedTrip.candidates.map((candidate) => {
        return (
            <CandidatesCard key={candidate.id}>
                <p><strong>Nome:</strong> {candidate.name}</p>
                <p><strong>Idade:</strong> {candidate.age}</p>
                <p><strong>Nacionalidade:</strong> {candidate.country}</p>
                <p><strong>Profissão:</strong> {candidate.profession}</p>
                <p><strong>Texto de candidatura:</strong> {candidate.applicationText}</p>
                <ButtonsContainer>
                    <button onClick={() => decideCandidate(candidate.id, false)}>Reprovar</button>
                    <button onClick={() => decideCandidate(candidate.id, true)}>Aprovar</button>
                </ButtonsContainer>
            </CandidatesCard>
        );
    });

    const approvedCandidatesList = detailedTrip.approved && detailedTrip.approved.map((candidate) => {
        return <li key={candidate.id}>{candidate.name}</li>
    });

    return (
        <MainContainer>
            {isLoading 
            ? <Message>Carregando detalhes do destino ...</Message>
            : (<div>
                <h2>{detailedTrip.name}</h2>
                <DetailCard>
                <CardInfo>
                    <img src={label} alt="Ícone de rótulo" />
                    <p><strong>Título do destino:</strong> {detailedTrip.name}</p>
                </CardInfo>
                <CardInfo>
                    <img src={description} alt="Ícone de descrição"/>
                    <p><strong>Descrição:</strong> {detailedTrip.description}</p>
                </CardInfo>
                <CardInfo>
                    <img src={planet} alt="Ícone de planeta" />
                    <p><strong>Planeta de destino:</strong> {detailedTrip.planet}</p>
                </CardInfo>
                <CardInfo>
                    <img src={calendar} alt="Ícone de planeta" />
                    <p><strong>Duração da viagem:</strong> {detailedTrip.durationInDays} dias</p>
                </CardInfo>
                <CardInfo>
                    <img src={hourglass} alt="Ícone de planeta" />
                    <p><strong>Disponível até:</strong> {detailedTrip.date}</p>
                </CardInfo>
                </DetailCard>
                
                <CandidatesArea>
                    <CandidateTitle>
                        <img src={candidates} alt="Ícone de escolha de candidatos "/>
                        <h3>Candidatos pendentes</h3>
                    </CandidateTitle>
                    {detailedTrip.candidates.length
                    ? pendingCandidatesList
                    : <p>Não há candidatos pendentes para este destino</p>
                    }

                    <CandidateTitle>
                        <img src={candidates} alt="Ícone de escolha de candidatos "/>                       
                        <h3>Candidatos Aprovados</h3>
                    </CandidateTitle>

                    <CandidatesCard>
                    {detailedTrip.approved.length
                    ? <ul>{approvedCandidatesList}</ul>
                    : <p>Não há candidatos aprovados para este destino</p>
                    }
                    </CandidatesCard>
                </CandidatesArea>
                </div>)
            }
            <ButtonBackPage />
        </MainContainer>
    );
};