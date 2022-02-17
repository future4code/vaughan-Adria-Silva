import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const FooterPages = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #EFD2F8;
    padding: 2rem;

    @media(max-width: 375px) {
        flex-direction: column;
        padding: 1rem;
    }
`

export const Button = styled.button`
    margin: 1.5rem auto;
    padding: 4px;
    border-radius: 32px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f36986;
    border: thin solid #ffffff;
    cursor: pointer;
    img {
        width: 32px;
        filter: invert(100%) sepia(4%) saturate(0%) hue-rotate(217deg) brightness(105%) contrast(103%);
    }
    p {
        font-size: 20px;
        margin: 0 8px;
        color: white;
    }

    &:hover {
        background-color: white;
        border: thin solid #f36986;

        img {
            filter: invert(52%) sepia(65%) saturate(915%) hue-rotate(309deg) brightness(100%) contrast(92%);
        }

        p {
            color: #f36986;
        }
    }
`

export const Slogan = styled.div`
    margin: auto 2rem;

    h3 {
        font-size: 2rem;
        color: #CD2F44;
    }

    p {
        color: #666666;
        font-size: 1.1rem;
        font-weight: 600;
        text-align: justify;
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
    color: #666666;

    address {
        margin: 1rem 0 0 0;
        img {
            width: 40px;
            margin: auto 8px;
            filter: invert(25%) sepia(52%) saturate(3761%) hue-rotate(336deg) brightness(85%) contrast(87%);
        }
    }
    @media(max-width: 375px) {
        margin-top: 1rem;
    }
`