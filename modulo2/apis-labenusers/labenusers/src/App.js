import React from 'react';
import axios from 'axios';
import Cadastro from './components/Cadastro';
import Listagem from './components/Listagem';

import { Titulo } from './styles';
import { CardUsuario } from './styles';
import DetalheUsuario from './components/DetalheUsuario';

export default class App extends React.Component {
  state = {
    allUsers: [],
    inputName: "",
    inputEmail: "",
    screen: 1,
    selectedUser: ""
  };

  componentDidMount() {
    this.getAllUsers();
  };

  // Funções de evento

  onClickToList = () => {
    this.setState({
      screen: 2
    });
  };

  onClickToRegistration = () => {
    this.setState({
      screen: 1
    });
  };

  onClickToDetailsUser = (id) => {
    this.setState({
      screen: 3,
      selectedUser: id
    });
  };

  handleInputName = (event) => {
    this.setState({
      inputName: event.target.value
    });
  };

  handleInputEmail = (event) => {
    this.setState({
      inputEmail: event.target.value
    });
  };

  // Funções de requisições

  getAllUsers = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const axiosConfig = {
      headers: { Authorization: "adria-silva-vaughan" }
    };

    axios
      .get(url, axiosConfig)
      .then((response) => {
        this.setState({
          allUsers: response.data
        });
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Deu erro no get all", error.response.data);
      });
  };

  createUser = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const axiosConfig = {
      headers: { Authorization: "adria-silva-vaughan" }
    };
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    };

    axios
      .post(url, body, axiosConfig)
      .then((response) => {
        console.log(response.data);
        alert("Novo(a) usuário(a) cadastrado(a) com sucesso");
        this.setState({
          inputName: "",
          inputEmail: ""
        });
        this.getAllUsers();
      })
      .catch((error) => {
        console.log(error.response);
        alert(`Algo deu errado! Verifique o erro: \n ${error.response.data.message} \n Por favor, tente cadastrar o usuário novamente.`);
      });
  };

  deleteUser = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
    const axiosConfig = {
      headers: { Authorization: "adria-silva-vaughan" }
    };

    const deleteConfirmation = "Tem certeza de que deseja deletar?"

    if (window.confirm(deleteConfirmation) === true) {
    	console.log("usuário quis deletar alguém da lista");

      axios
      .delete(url, axiosConfig)
      .then((response) => {
        console.log(response.data);
        alert("Atenção: Usuário(a) deletado(a) com sucesso!");
        this.getAllUsers();
      })
      .catch((error) => {
        console.log(error.response.data);
        alert("Algo deu errado! Não foi possível deletar o usuário solicitado");
      }
      );  
    } else {
      console.log("usuário não quis deletar alguém da lista");
    }
  }

  render() {
    const allUsersList = this.state.allUsers.map((users) => {
      return (
        <CardUsuario key={users.id}>
          {/* <span title='Ver mais' onClick={this.onClickToDetailsUser}>{users.name}</span> */}
          <span title='Ver mais' onClick={() => this.onClickToDetailsUser(users.id)}>{users.name}</span>
          <button onClick={() => this.deleteUser(users.id)} title='Deletar'>X</button>
        </CardUsuario>
      )
    });

    console.log(this.state);

    const renderScreen = () => {
      switch (this.state.screen) {
        case 1:
          return (
            <Cadastro
              valueName={this.state.inputName}
              valueEmail={this.state.inputEmail}
              onChangeName={this.handleInputName}
              onChangeEmail={this.handleInputEmail}
              onClickCreate={this.createUser}
              onClickSeeList={this.onClickToList}
            />
          );
        case 2:
          return (
            <Listagem
              list={allUsersList}
              onClickSeeRegistration={this.onClickToRegistration}
            />
          );
        case 3:
          return (
            <DetalheUsuario
              idValue={this.state.selectedUser}
              onClickSeeList={this.onClickToList}
            />
          );
      }
    }

    return (
      <div>
        <Titulo>LabenUsers</Titulo>
        <div>{renderScreen()}</div>
      </div>
    );
  };
};

