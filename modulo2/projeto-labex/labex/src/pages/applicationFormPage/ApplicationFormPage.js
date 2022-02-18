import axios from "axios";
import React, { useState } from "react";
import { useForm } from "../../hooks/handleInput.js";
import { useTripsListRequest } from "./../../assets/getTrips.js";
import { URL_BASE } from "../../constants/urlBase.js";
import { contentType } from "../../constants/headers.js";
import SelectCountries from "../../components/selectCountries/SelectCountries.js";
import ButtonBackPage from "../../components/buttonBackPage/ButtonBackPage.js";

export default function ApplicationFormPage () {
    const [trips] = useTripsListRequest();

    const { form, onChangeForm, cleanFields } = useForm(
        {
            name: "",
            age: 0,
            applicationText: "",
            profession: ""
        }
    );
    const [country, setCountry] = useState("");
    
    const [id, setId] = useState("");
    const handleOnClickTripName = (id) => setId(id);

    const handleOnChangeCountry = (event) => setCountry(event.target.value);
    

    const selectTrip = trips && trips.map((trip) => {
        return (
            <option 
                key={trip.id} 
                onClick={() => {handleOnClickTripName(trip.id)}}
            >
                {trip.name}
            </option>
        );
    });

    const applyToTrip = async (event) => {
        event.preventDefault();
        const headersConfig = {
            headers: contentType
        };

        const body = {...form, country: country}
        console.log(body)

        try {
            const response = await axios.post(`${URL_BASE}/trips/${id}/apply`, body, headersConfig);
            alert("Sua candidatura foi registrada com sucesso");
            cleanFields();
        } catch (error) {
            alert("Desculpe-nos! Ocorreu um erro com a sua candidatura. Por favor, tente novamente mais tarde.");
        };
    };

    return (
        <div>ApplicationFormPage
            <form onSubmit={applyToTrip}>
                <input
                    name={"name"}
                    value={form.name}
                    onChange={onChangeForm}
                    placeholder="Nome"
                    pattern={"^[a-zA-Z\u00C0-\u00FF ]{3,}$"}
                    title={"Mínimo 3 caracteres"}
                    required                
                />
                <input
                    name={"age"}
                    value={form.age}
                    onChange={onChangeForm}
                    type={"number"}
                    min={18}
                    required                
                />
                <input
                    name={"profession"}
                    value={form.profession}
                    onChange={onChangeForm}
                    placeholder="Profissão"
                    pattern={"^[a-zA-Z\u00C0-\u00FF ]{10,}$"}
                    title={"Mínimo 10 caracteres"}
                    required                
                />
                <SelectCountries handleOnChangeCountry={handleOnChangeCountry} />
                <select required>
                    <option>Selecione seu destino</option>
                    {selectTrip}
                </select>
                <input
                    name={"applicationText"}
                    value={form.applicationText}
                    onChange={onChangeForm}
                    placeholder="Texto de candidatura"
                    pattern={"^.{30,}$"}
                    title={"Mínimo 30 caracteres"}
                    required                
                />
                <button>Enviar</button>
            </form>
            <ButtonBackPage />
        </div>
    );
};