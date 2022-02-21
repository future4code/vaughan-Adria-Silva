import axios from "axios";
import React from "react";
import { URL_BASE } from "../../constants/urlBase.js";
import { useForm } from "../../hooks/handleInput.js"
import { contentType } from "../../constants/headers.js";
import { useProtectedPage } from "../../hooks/protectedPage.js";
import ButtonBackPage from "../../components/buttonBackPage/ButtonBackPage.js";
import { MainContainer, Form, InputType, TextDescriptionArea, SubmitButton } from "./Styles.js";


// const MainContainer = styled.main`
//     margin: 0 auto;
//     width: 70vw;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;

//     h2 {
//         font-size: xx-large;
//         color: white;
//         text-shadow: 4px 4px 25px #0a121f;
//         text-align: center;
//         margin: 32px 8px;
//     }

//     @media(max-width: 480px) {
//         width: 90vw;
//     }
// `

// const Form = styled.form`
//     width: 100%;

//     fieldset {
//         width: 70%;
//         margin: 0 auto;;
//         padding: 8px;
//         border-radius: 1rem;
//         display: flex;
//         flex-direction: column;
//         justify-content: flex-start;
//         box-shadow: 10px 8px 2rem #0a121f;
//     }

//     label {
//         margin-left: 4px;
//         color: white;
//         text-shadow: 4px 4px 15px #0a121f;
//     }

//     #planet {
//         width:200px;
//         padding: 8px;
//         margin: 8px 0;
//         height: 40px;
//         font-size: 18px;
//         border-radius: 16px;
//         border: none;
//     }

//     #date {
//         width: 130px;
//     }

//     @media(max-width: 480px) {
//         fieldset {
//             width: 95%;
//         }
//     }
// `

// const InputType = styled.input`
//     padding: 8px;
//     margin: 8px 0;
//     height: 1.5rem;
//     font-size: 18px;
//     border-radius: 16px;
//     border: none;
// `

// const TextDescriptionArea = styled.textarea`
//     padding: 8px;
//     margin: 8px 0;
//     font-size: 18px;
//     border-radius: 16px;
//     border: none;
// `

// const SubmitButton = styled.button`
//     font-size: larger;
//     font-weight: bold;
//     width: 200px;
//     height: 40px;
//     margin: 0 auto;
//     border: solid white;
//     border-radius: 24px;
//     background-color: #0a121f;
//     color: white;
//     cursor: pointer;
    
//     &:hover {
//         background-color: white;
//         color: #0a121f;
//         border: solid #0a121f;
//     }
// `

export default function CreateTripPage () {
    useProtectedPage();
    const {form, onChangeForm, cleanFields} = useForm(
        {
            name: "",
            planet: "",
            date: "",
            description: "",
            durationInDays: ""
        }
    );

    let today = new Date().toISOString().split("T")[0];

    const createTrip = async (event) => {
        event.preventDefault();

        if (form.planet === "" || form.planet === "Escolha um planeta") {
            alert("Por favor, escolha um planeta!");
        } else {
            const headersConfig = {
                headers: {
                    contentType,
                    auth: localStorage.getItem("token")
                }
            };

            const selectedDate = form.date.split("-")
            const formatedDate = `${selectedDate[2]}/${selectedDate[1]}/${selectedDate[0]}`

            const body = {
                ...form,
                date: formatedDate,
                durationInDays: Number(form.durationInDays)
            }

            console.log(body)

            try {
                const response = await axios.post(`${URL_BASE}/trips`, body, headersConfig);
                alert("Novo destino espacial criado com sucesso!")
                cleanFields();
            } catch (error) {
                alert("Desculpe-nos! Algum erro ocorreu ao criar um novo destino. Por favor, tente novamente mais tarde.")
            };
        };
    };

    return (
        <MainContainer>
            <h2>Criar um novo Destino</h2>
            <Form onSubmit={createTrip}>
                <fieldset>
                    <label for="tripName">Título:</label>
                    <InputType
                        id="tripName"
                        name={"name"}
                        value={form.name}
                        onChange={onChangeForm}
                        placeholder="Título do destino"
                        pattern={"^[a-zA-Z\u00C0-\u00FF ]{5,}$"}
                        title={"Mínimo 5 caracteres"}
                        required                
                    />
                    <label for="planet">Planeta:</label>
                    <select
                        id="planet"
                        name={"planet"}
                        value={form.planet}
                        onChange={onChangeForm}
                        required
                    >
                        <option>Escolha um planeta</option>
                        <option>Mercúrio</option>
                        <option>Vênus</option>
                        <option>Terra</option>
                        <option>Marte</option>
                        <option>Júpter</option>
                        <option>Saturno</option>
                        <option>Urano</option>
                        <option>Netuno</option>
                        <option>Plutão</option>
                    </select>
                    <label id="description">Descrição:</label>         
                    <TextDescriptionArea
                        id="description"
                        rows={"2"}
                        cols={"20"}
                        name={"description"}
                        value={form.description}
                        onChange={onChangeForm}
                        placeholder="Descrição sobre a viagem ..."
                        pattern={"^[a-zA-Z\u00C0-\u00FF ]{30,}$"}
                        title={"Mínimo 30 caracteres"}
                        required                
                    />
                    <label for="duration">Duração:</label>
                    <InputType
                        id="duration"
                        name={"durationInDays"}
                        value={form.durationInDays}
                        onChange={onChangeForm}
                        placeholder="Duração da viagem em dias"
                        type={"number"}
                        min={50}
                        required                
                    />
                    <label for="date">Prazo de inscrição:</label>
                    <InputType
                        id="date"
                        name={"date"}
                        value={form.date}
                        onChange={onChangeForm}
                        placeholder="dd/mm/aaaa"
                        type={"date"}
                        min={today}
                        title={"Escolha uma data no futuro"}
                        required                
                    />
                    <SubmitButton>Criar</SubmitButton>
                </fieldset>
            </Form>
            <ButtonBackPage />
        </MainContainer>
    );
};