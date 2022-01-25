import React from 'react';
import './App.css';
import axios from 'axios';
import Cadastro from './components/Cadastro';
import Listagem from './components/Listagem';

export default class App extends React.Component {
  state={
    allUsers: [],
    inputName: "",
    inputEmail: "",
    screen: 2
  }

  componentDidMount(){
    this.getAllUsers();
  }

  onClicktoList = () => {
    this.setState({
      screen: 2
    })
  }

  onClickToRegistration = () => {
    this.setState({
      screen: 1
    })
  }

  handleInputName = (event) => {
    this.setState({
      inputName: event.target.value
    })
  }

  handleInputEmail = (event) => {
    this.setState({
      inputEmail: event.target.value
    })
  }

  getAllUsers = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const axiosConfig = {
      headers: {Authorization: "adria-silva-vaughan"}
    };

    axios
    .get(url, axiosConfig)
    .then( (response) => {
      this.setState({
        allUsers: response.data
      })
      console.log(response.data);
    })
    .catch( (error) => {
      console.log("Deu erro no get all", error.response);
    });
  }

  createUser = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const axiosConfig = {
      headers:{Authorization: "adria-silva-vaughan"}
    };
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    };

    axios
    .post(url, body, axiosConfig)
    .then( (response) => {
      console.log(response.data);
      alert("Novo usuário cadastrado com sucesso");
      this.setState({
        inputName: "",
        inputEmail: ""
      });
      this.getAllUsers();
    })
    .catch( (error) => {
      console.log(error.response);
      alert("Algo deu errado! Por favor, tente criar novo usuário novamente.");
    });
  }

  // deleteUser = (id) => {
  //   const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
  //   const axiosConfig = {
  //     headers:{Authorization: "adria-silva-vaughan"}
  //   };
  //   axios
  //   .delete(url, axiosConfig)
  //   .then( (response) => {
  //     console.log(response.data)
  //     alert("Atenção: Usuário deletado com sucesso!");
  //   })
  //   .catch( (error) => {
  //     console.log(error.response)
  //     alert("Algo deu errado! Não foi possível deletar o usuário solicitado");
  //   }
  //   );
  // }

  render () {
    const allUsersList = this.state.allUsers.map( (users) => {
      return (
        <div key={users.id}>
            <span>{users.name}</span>
            <button /*onClick={() => this.deleteUser(users.id)}*/>Deletar usuário</button>
        </div>
      )
    });
    console.log(this.state);

    const renderScreen = () => {
      if (this.state.screen === 1) {
        return <Cadastro 
          valueName={this.state.inputName}
          onChangeName={this.handleInputName}

          valueEmail={this.state.inputEmail}
          onChangeEmail={this.handleInputEmail}

          onClickCreate={this.createUser}

          onClickSeeList={this.onClicktoList}
        />     
      } else {
        return <Listagem
          list={allUsersList}
          onClickSeeRegistration={this.onClickToRegistration}
        />
      }
    }

    return (
      <div className="App">
        <h1>LabenUsers</h1>     
        <div>{renderScreen()}</div>
      </div>
    );
  };
};
 
