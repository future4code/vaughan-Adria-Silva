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

export const CandidateTitle = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img {
        height: 24px;
        filter: invert(5%) sepia(16%) saturate(2454%) hue-rotate(179deg) brightness(101%) contrast(97%);
    }
    h3 {
        font-size: medium;
    }
`

export const CandidatesArea = styled.div`
    margin: 16px auto;
    background-color: white;
    box-shadow: 10px 8px 2rem #0a121f;
    width: 80%;
    padding: 16px;
    border-radius: 16px;
    
    h3 {
        margin-left: 8px;
        font-size: medium;
    }

    @media(max-width: 480px) {
        width: 65%;
    }
`

export const CandidatesCard = styled.div`
    margin: 16px auto;
    width: 80%;
    padding: 16px;
    border-radius: 16px;
    border: solid #0a121f;

    p {
        text-align: justify;
    }

    ul {
        margin-left: 16px;
    }
`

export const DetailCard = styled.div`
    margin: 0 auto;
    background-color: white;
    box-shadow: 10px 8px 2rem #0a121f;
    width: 80%;
    padding: 16px;
    border-radius: 16px;

    p {
        text-align: justify;
    }

    @media(max-width: 480px) {
        width: 65%;
    }
`

export const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        font-size: 16px;
        font-weight: bold;
        width: 200px;
        height: 36px;
        border: solid white;
        border-radius: 24px;
        background-color: #0a121f;
        color: white;
        cursor: pointer;
        margin-top: 16px;

        &:hover {
            background-color: white;
            color: #0a121f;
            border: solid #0a121f;
        }
    }
`
export const Message = styled.p`
    font-size: xx-large;
    color: white;
    text-shadow: 2px 2px 15px white;
    text-align: center;
    margin: 32px auto;
`