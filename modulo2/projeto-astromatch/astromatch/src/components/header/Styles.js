import styled from "styled-components";

export const HeaderPages = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    background-color: #d739a0;
`

export const Slogan = styled.div`
    margin-left: 1rem;
    display: flex;
    align-items: center;

    img {
        width: 64px;
        height: 64px;
        margin-right: 1rem;
    }
`

export const Button = styled.button`
    border-radius: 32px;
    border: thin solid grey;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 48px;
    margin-right: 0.5rem;
    img {
        width: 40px;
    }
    span {
        font-weight: 900;
        color:#ec5569;
    }
`