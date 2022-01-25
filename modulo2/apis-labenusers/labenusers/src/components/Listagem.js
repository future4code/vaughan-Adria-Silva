import React from "react";

export default class Listagem extends React.Component {
    render () {
        return <div>
        
            <h2>Lista de Usuários</h2>
            <div>
                {this.props.list}
            </div>

            <button onClick={this.props.onClickSeeRegistration}>Ir para cadastro</button>

        </div>
    };
};