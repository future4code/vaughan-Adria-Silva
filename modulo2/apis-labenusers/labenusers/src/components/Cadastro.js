import React from "react";

import {Button} from "../styles"
import {Register} from "../styles"
import {Submit} from "../styles"

export default class Cadastro extends React.Component {
    render () {
        return (
          <Register>
              <h2>Cadastro de novos usuários</h2>
              <Submit>
                <label>Nome:</label>
                <input 
                  placeholder="Nome completo"
                  value={this.props.valueName}
                  onChange={this.props.onChangeName}
                />
                <label>E-mail:</label>
                <input 
                  placeholder='seuemail@exemplo.com'
                  value={this.props.valueEmail}
                  onChange={this.props.onChangeEmail}
                />
                <button onClick={this.props.onClickCreate}>Criar usuário (a)</button>
              </Submit>
              <Button onClick={this.props.onClickSeeList}>Ver lista de usuários</Button>
          </Register>
        )
    };
};