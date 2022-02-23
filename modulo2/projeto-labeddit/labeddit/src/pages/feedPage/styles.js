import Card from '@mui/material/Card';
import styled from "styled-components";

export const CardsPostContainer = styled.div`
    margin: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const PostCard = styled(Card)`
    margin: 2vh 0;
    padding: 8px;

    width: 40vw;
    min-width: 300px;

    height: 40vw;
    min-height: 200px;

`