import styled from 'styled-components';
import { Typography } from '@mui/material';

export const MainContainer = styled.main`
    height: calc(90vh - 64px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(max-width: 600px) {
        height: calc(90vh - 56px);
    }
`

export const Title = styled(Typography)`
    text-align: center;
    text-shadow: 1px 1px 8px #3c3c3c;
    margin: 16px;
`