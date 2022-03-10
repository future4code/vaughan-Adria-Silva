import styled from "styled-components";
import { primaryColor } from "../../constants/color";

export const MainContainer = styled.main`
    margin: 10vh 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        filter: invert(58%) sepia(54%) saturate(2826%) hue-rotate(349deg) brightness(100%) contrast(92%);
    }

    h4 {
        font-size: x-large;
        color: ${primaryColor};
        text-shadow: 1px 1px 2px black;
        text-align: center;
    }

    @media(max-width: 480px) {
        img {
            max-width: 300px;
        }
    }
`