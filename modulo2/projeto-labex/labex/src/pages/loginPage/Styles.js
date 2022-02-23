import styled from "styled-components";

export const MainContainer = styled.main`
    margin: 0 auto;
    width: 70vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        font-size: xx-large;
        color: white;
        text-shadow: 4px 4px 25px #0a121f;
        text-align: center;
        margin: 32px 8px;
    }

    @media(max-width: 480px) {
        width: 90vw;
    }
`

export const InputType = styled.input`
    padding: 8px;
    margin: 8px 0;
    height: 1.5rem;
    width: 300px;
    font-size: 18px;
    border-radius: 16px;
    border: none;
`

export const Fieldset = styled.fieldset`
    width: 70%;
    margin: 0 auto;;
    padding: 8px;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-shadow: 10px 8px 2rem #0a121f;
    
    label {
        margin-left: 4px;
        color: white;
        text-shadow: 4px 4px 15px #0a121f;
    }
`

export const SubmitButton = styled.button`
    font-size: larger;
    font-weight: bold;
    width: 200px;
    height: 40px;
    margin: 8px auto;
    border: solid white;
    border-radius: 24px;
    background-color: #0a121f;
    color: white;
    cursor: pointer;
    
    &:hover {
        background-color: white;
        color: #0a121f;
        border: solid #0a121f;
    }
`
