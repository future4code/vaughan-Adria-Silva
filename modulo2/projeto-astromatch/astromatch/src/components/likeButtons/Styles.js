import styled from "styled-components";

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    margin: auto;

    @media(max-width: 375px) {
        width: 80%;
    }
`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: thin solid grey;
    border-radius: 24px;
    margin: 2rem;
    img {
        width: 40px;
    }
`