import styled from "styled-components";

export const FooterPages = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #ffe8eb;
    padding: 2rem;

    @media(max-width: 375px) {
        flex-direction: column;
    }
`

export const Button = styled.button`
    border-radius: 32px;
    border: thin solid grey;
    img {
        width: 64px;
    }
`

export const Slogan = styled.div`
    margin: auto 2rem;

    h3 {
        font-size: 2rem;
    }

    p {
        font-size: 1.1rem;
        font-weight: 900;
        text-align: justify;
        margin-top: -16px;
    }

    @media(max-width: 375px) {
        margin: 0.4rem auto;
    }
`

export const Authorship = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    div {
        img {
            width: 40px;
            margin: auto 8px;
        }
    }
`