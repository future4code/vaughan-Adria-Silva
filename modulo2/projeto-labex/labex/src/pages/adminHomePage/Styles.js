import styled from "styled-components";

export const MainContainer = styled.div`
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
export const CardsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CardTrip = styled.div`
    background-color: white;
    box-shadow: 10px 8px 2rem #0a121f;
    width: 100%;
    margin-bottom: 24px;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
        padding: 16px 0 16px 16px;
        flex-grow: 1;
        color: #0a121f;
        cursor: pointer;
    }

    button{
        margin-right: 16px;
        border: none;
        background-color: white;

        img {
            cursor: pointer;
            height: 20px;
            filter: invert(5%) sepia(16%) saturate(2454%) hue-rotate(179deg) brightness(101%) contrast(97%);
                &:hover {
                    height: 16px;
                }
        }
    }
`

export const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        font-size: larger;
        font-weight: bold;
        width: 200px;
        height: 45px;
        border: solid white;
        border-radius: 24px;
        background-color: #0a121f;
        color: white;
        cursor: pointer;
        box-shadow: 10px 8px 2rem #0a121f;

        &:hover {
            background-color: white;
            color: #0a121f;
            border: solid #0a121f;
        }
    }
    #logout {
        width: 100px;
    }
`

export const Message = styled.p`
    font-size: xx-large;
    color: white;
    text-shadow: 2px 2px 15px white;
    text-align: center;
    margin: 32px auto;
`