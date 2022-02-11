import styled from "styled-components";

export const HeaderPages = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    border-bottom: thin solid #cd2f44;
`

export const Slogan = styled.div`
    margin-left: 1rem;
    display: flex;
    align-items: center;

    img {
        width: 58px;
        margin-right: 1rem;
        @media(max-width: 375px) {
            margin-right: 0.5rem;
        }
    }
    h1 {
        color: #ec5569;
    }
`

export const Button = styled.button`
    border-radius: 32px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 48px;
    margin-right: 0.5rem;
    cursor: pointer;
    img {
        width: 40px;
    }
    span {
        font-weight: 900;
        color:#ec5569;
        position: relative;
        top: -8px;
    }
`