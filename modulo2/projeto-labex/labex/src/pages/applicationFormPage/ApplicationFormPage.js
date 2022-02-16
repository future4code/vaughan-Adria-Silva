import axios from "axios";
import React, { useState } from "react";
import { useInput } from "../../hooks/handleInput.js";
import { useTripsListRequest } from "./../../assets/getTrips.js";
import { URL_BASE } from "../../constants/urlBase.js";
import { contentType } from "../../constants/headers.js";
import SelectCountries from "../../components/selectCountries/SelectCountries.js";
import { useNavigate } from "react-router-dom";

export default function ApplicationFormPage () {
    const navigate = useNavigate();
    const [trips, isLoadingTrips, errorTrips] = useTripsListRequest();
    const [name, inputName] = useInput("text", "Nome completo");
    const [age, inputAge] = useInput("number", "00");
    const [applicationText, inputApplicationText] = useInput("text", "Texto de Candidatura" );
    const [job, inputJob] = useInput("text", "Profissão");
    const [id, setId] = useState("");
    const [country, setCountry] = useState("");

    const handleOnClickTripName = (id) => {
        setId(id);
    }

    const handleOnChangeCountry = (event) => {
        setCountry(event.target.value);
    }

    const selectTrip = trips && trips.map((trip) => {
        return <option key={trip.id} onClick={() => {handleOnClickTripName(trip.id)}}>
            {trip.name}
        </option>
    });

    const applyToTrip = async () => {
        const headersConfig = {
            headers: contentType
        };

        const body = {
            name: name,
            age: age,
            applicationText: applicationText,
            profession: job,
            country: country
        };

        try {
            const response = await axios.post(`${URL_BASE}/trips/${id}/apply`, body, headersConfig);
            alert("Sua candidatura foi registrada com sucesso")
        } catch (error) {
            alert("Desculpe-nos! Ocorreu um erro com a sua candidatura. Por favor, tente novamente mais tarde.")
        };
    };

    return (
        <div>ApplicationFormPage
            {inputName}
            {inputAge}
            <SelectCountries handleOnChangeCountry={handleOnChangeCountry} />
            {inputJob}
            <select>
                <option>Selecione seu destino</option>
                {selectTrip}
            </select>
            {inputApplicationText}
            <button onClick={() => navigate(-1)}>Voltar</button>
            <button onClick={applyToTrip} >Enviar</button>
        </div>
    );
};