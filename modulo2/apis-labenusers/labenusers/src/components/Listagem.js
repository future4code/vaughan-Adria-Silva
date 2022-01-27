import React from "react";
import { ListContainer } from "../styles";
import { Button } from "../styles";

export default class Listagem extends React.Component {
    render () {
        return (
            <ListContainer>
                <h2>Lista de Usuários</h2>
                {this.props.list}
                <Button onClick={this.props.onClickSeeRegistration}>Ir para cadastro</Button>
            </ListContainer>
        )
    };
};