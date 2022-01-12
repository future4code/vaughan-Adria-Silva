import React from 'react';
import styled from 'styled-components';
// import './CardPequeno.css'

const LittleCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;

    img {
        width: 30px;
        margin-right: 10px;
        border-radius: 50%;
    }
`

export function CardPequeno(props) {
    return (
        <LittleCardContainer>
            <img src={ props.imagem } />
            <p><strong>{props.contato}:</strong>  {props.contatoValor}</p>
        </LittleCardContainer>
    )
}