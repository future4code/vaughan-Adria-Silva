import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: #0a121f;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 16px 32px;
    img {
        filter: invert(99%) sepia(0%) saturate(1212%) hue-rotate(236deg) brightness(113%) contrast(101%);
        height: 32px;
    }
    h1 {
        margin-left: 16px;
        color: white;
    }
`