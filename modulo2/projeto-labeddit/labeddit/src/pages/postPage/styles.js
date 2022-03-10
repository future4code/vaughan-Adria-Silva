import styled from "styled-components";
import { Card } from "@mui/material";
import { primaryColor } from '../../constants/color';

export const MainContainer = styled.main`
    padding: 10vh 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const PostCard = styled(Card)`
    margin: 2vh 0;
    padding: 1rem;
    width: 40%;
    min-width: 400px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 480px) {
        min-width: calc(100vw - 15vw);
    }

`

export const PostContent = styled.div`
    align-self: flex-start;
    p {
        text-align: justify;
    }

    h3 {
        color: ${primaryColor};
        font-weight: normal;
        font-size: 18px;
    }
    
    h2 {
        color: ${primaryColor};
    }

`

export const VotesAndCommentsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const CommentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 12px;

    img {
        width: 32px;
        margin-right: 8px;
        filter: invert(49%) sepia(100%) saturate(409%) hue-rotate(345deg) brightness(96%) contrast(98%);
    }
    p {
        font-size: large;
    }
`

export const NewPostCard = styled(Card)`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    min-width: 400px;

    @media(max-width: 480px) {
        min-width: calc(100vw - 15vw);
    }
`

export const CardsCommentContainer = styled.div`
    margin: 4vh 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CommentCard = styled(Card)`
    margin: 2vh 0;
    padding: 1rem;
    width: 40%;
    min-width: 400px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 480px) {
        min-width: calc(100vw - 15vw);
    }
`

export const CommentContent = styled.div`
    align-self: flex-start;

    h4 {
        color: ${primaryColor};
    }
`