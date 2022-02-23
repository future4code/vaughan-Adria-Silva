import styled from "styled-components"

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
    font-size: 18px;
    border-radius: 16px;
    border: none;
`
export const Form = styled.form`
    width: 100%;
    fieldset {
        width: 70%;
        margin: 0 auto;;
        padding: 8px;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        box-shadow: 10px 8px 2rem #0a121f;
    }
    
    label {
        margin-left: 4px;
        color: white;
        text-shadow: 4px 4px 15px #0a121f;
    }

    #age {
        width: 20%
    }

    #trip, #country {
        width:50%;
        padding: 8px;
        margin: 8px 0;
        height: 40px;
        font-size: 18px;
        border-radius: 16px;
        border: none;
    }

    @media(max-width: 480px) {
        fieldset {
            width: 95%;
        }
        #name, #textApplication {
            width: 93%;
        }

        #job {
            width: 60%;
        }
        #trip, #country {
            width: 98%;
        }
    }
`

export const TextApplicationArea = styled.textarea`
    padding: 8px;
    margin: 8px 0;
    font-size: 18px;
    border-radius: 16px;
    border: none;
`

export const SubmitButton = styled.button`
    font-size: larger;
    font-weight: bold;
    width: 200px;
    height: 40px;
    margin: 0 auto;
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