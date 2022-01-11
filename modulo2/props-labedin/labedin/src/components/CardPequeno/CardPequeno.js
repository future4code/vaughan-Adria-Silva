import React from 'react';
import './CardPequeno.css'

export function CardPequeno(props) {
    return (
        <div className="littlecard-container">
            <img src={ props.imagem } />
            <p><strong>{props.contato}:</strong>  {props.contatoValor}</p>
        </div>
    )
}