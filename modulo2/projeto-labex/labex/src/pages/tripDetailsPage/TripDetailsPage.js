import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { URL_BASE } from "../../constants/urlBase.js";
import { contentType } from "../../constants/headers.js";
import { useProtectedPage } from "../../hooks/protectedPage";


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
            console.log(error);
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
            console.log(error)
        }
    }

    const pendingCandidatesList = detailedTrip.candidates && detailedTrip.candidates.map((candidate) => {
        return (
            <li key={candidate.id}>
                <p>Nome: {candidate.name}</p>
                <p>Idade: {candidate.age}</p>
                <p>Nacionalidade: {candidate.country}</p>
                <p>Profissão: {candidate.profession}</p>
                <p>Texto de candidatura: {candidate.applicationText}</p>
                <button onClick={() => decideCandidate(candidate.id, false)}>Reprovar</button>
                <button onClick={() => decideCandidate(candidate.id, true)}>Aprovar</button>
            </li>
        );
    });

    const approvedCandidatesList = detailedTrip.approved && detailedTrip.approved.map((candidate) => {
        return <li key={candidate.id}>{candidate.name}</li>
    });

    return (
        <div>TripDetailsPage
            {isLoading 
            ? <p>Carregando detalhes do destino ...</p>
            : (<div>
                <h2>{detailedTrip.name}</h2>
                <p>Descrição: {detailedTrip.description}</p>
                <p>Planeta de destino: {detailedTrip.planet}</p>
                <p>Duração da viagem: {detailedTrip.durationInDays} dias</p>
                <p>Disponível até: {detailedTrip.date}</p>
                <p><strong>Candidatos pendentes:</strong></p>

                {detailedTrip.candidates.length
                ? <div>{pendingCandidatesList}</div>
                : <p>Não há candidatos pendentes para este destino</p>
                }
                <p><strong>Candidatos Aprovados:</strong></p>
                {detailedTrip.approved.length
                ? <div>{approvedCandidatesList}</div>
                : <p>Não há candidatos aprovados para este destino</p>
                }
                </div>)
            }
        </div>
    );
};