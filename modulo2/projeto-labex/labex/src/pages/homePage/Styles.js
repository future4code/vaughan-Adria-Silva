import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        filter: invert(99%) sepia(0%) saturate(1212%) hue-rotate(236deg) brightness(113%) contrast(101%);
        width: 60vh;
        opacity: 0.3;
        @media(max-width: 480px) {
            width: 90%;
        }
    }
    div {
        position: fixed;
        top: calc(50vh-8px);

        @media(max-width: 480px) {
            display: flex;
            flex-direction: column;
        }
    }
`

export const Buttons = styled.button`
    font-size: larger;
    font-weight: bold;
    margin: 8px;
    width: 200px;
    height: 50px;
    border: none;
    border-radius: 24px;
    color: #0a121f;
    cursor: pointer;

    &:hover {
        background-color: #0a121f;
        color: white;
    }
`