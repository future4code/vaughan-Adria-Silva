import styled from "styled-components";

export const VotesContainer = styled.div`
    align-self: flex-start;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
        background-color: white;
        border: none;
        img {
            width: 32px;
            cursor: pointer;
            filter: invert(49%) sepia(100%) saturate(409%) hue-rotate(345deg) brightness(96%) contrast(98%);
        }
    }
    p {
        font-size: large;
    }
`