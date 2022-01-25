import React from "react";

export default class Cadastro extends React.Component {
    render () {
        return <div>
            <h2>Cadastro de novos usuários</h2>

            <input 
              placeholder="Nome completo"
              value={this.props.valueName}
              onChange={this.props.onChangeName}
            />

            <input 
              placeholder='seuemail@exemplo.com'
              value={this.props.valueEmail}
              onChange={this.props.onChangeEmail}
            />

            <button onClick={this.props.onClickCreate}>Criar usuário</button>

            <button onClick={this.props.onClickSeeList}>Ver lista de usuários</button>
        </div>
    };
};