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

export const CardTrip = styled.div`
    background-color: white;
    box-shadow: 10px 8px 2rem #0a121f;
    width: 80%;
    padding: 16px;
    border-radius: 16px;

`

export const CardTitle = styled.div`
    text-align: center;
    margin: 0 0 16px;

    h3 {
        color: #0a121f;
        margin-bottom: 4px;
    }
`

export const CardInfo = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img {
        height: 18px;
        filter: invert(5%) sepia(16%) saturate(2454%) hue-rotate(179deg) brightness(101%) contrast(97%);
    }

    p {
        margin: 4px 8px;
    }
`

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: 4fr 4fr;
    justify-items: center;
    gap: 20px;

    @media(max-width: 480px) {
        grid-template-columns: 1fr;
    }
`

export const SubscribeButton = styled.button`
    font-size: larger;
    font-weight: bold;
    margin-bottom:32px;
    width: 200px;
    height: 50px;
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
`

export const Message = styled.p`
    font-size: xx-large;
    color: white;
    text-shadow: 2px 2px 15px white;
    text-align: center;
    margin: 32px auto;
`