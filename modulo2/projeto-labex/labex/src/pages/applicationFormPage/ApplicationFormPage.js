import axios from "axios";
import React, { useState } from "react";
import { useForm } from "../../hooks/handleInput.js";
import { useTripsListRequest } from "./../../assets/getTrips.js";
import { URL_BASE } from "../../constants/urlBase.js";
import { contentType } from "../../constants/headers.js";
import SelectCountries from "../../components/selectCountries/SelectCountries.js";
import ButtonBackPage from "../../components/buttonBackPage/ButtonBackPage.js";
import { MainContainer, InputType, Form, SubmitButton, TextApplicationArea } from "./Styles.js";


export default function ApplicationFormPage () {
    const [trips] = useTripsListRequest();

    const { form, onChangeForm, cleanFields } = useForm(
        {
            name: "",
            age: "",
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

        const body = {...form, age: Number(form.age), country: country}
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
        <MainContainer>
            <h2>Inscreva-se para uma viagem</h2>
            <Form onSubmit={applyToTrip}>
                <fieldset>
                <label for="name">Nome:</label>
                <InputType
                    id="name"
                    name={"name"}
                    value={form.name}
                    onChange={onChangeForm}
                    placeholder="Nome completo"
                    pattern={"^[a-zA-Z\u00C0-\u00FF ]{3,}$"}
                    title={"Mínimo 3 caracteres"}
                    required                
                />
                <label for="age">Idade:</label>
                <InputType
                    id="age"
                    name={"age"}
                    value={form.age}
                    onChange={onChangeForm}
                    placeholder="00"
                    type={"number"}
                    min={18}
                    required                
                />
                <label for="job">Profissão:</label>
                <InputType
                    id="job"
                    name={"profession"}
                    value={form.profession}
                    onChange={onChangeForm}
                    placeholder="Profissão"
                    pattern={"^[a-zA-Z\u00C0-\u00FF ]{10,}$"}
                    title={"Mínimo 10 caracteres"}
                    required                
                />
                <label for="country">Nacionalidade:</label>
                <SelectCountries handleOnChangeCountry={handleOnChangeCountry} />
                <label for="trip">Viagem:</label>
                <select id="trip" required>
                    <option >Selecione seu destino</option>
                    {selectTrip}
                </select>
                <label for="textApplication">Texto de Candidatura:</label>
                <TextApplicationArea
                    rows={"5"}
                    cols={"20"}
                    id="textApplication"
                    name={"applicationText"}
                    value={form.applicationText}
                    onChange={onChangeForm}
                    placeholder="Texto de candidatura"
                    pattern={"^.{30,}$"}
                    title={"Mínimo 30 caracteres"}
                    required                
                />
                <SubmitButton>Enviar</SubmitButton>
                </fieldset>
            </Form>
            <ButtonBackPage />
        </MainContainer>
    );
};