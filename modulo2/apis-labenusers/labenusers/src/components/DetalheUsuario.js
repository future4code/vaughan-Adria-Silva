import axios from "axios";
import React from "react";

import { DetailsUserContainer } from "../styles";
import { Button } from "../styles";

export default class DetalheUsuario extends React.Component{

    state = {
        name: "",
        email: ""
    }

    componentDidMount() {
        this.getUserById(this.props.idValue);
      };

    getUserById = async (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
        const axiosConfig = {
            headers: { Authorization: "adria-silva-vaughan" }
        };

        try {
            const response = await axios.get(url, axiosConfig);
            console.log("resposta",response.data);

            this.setState({
                name: response.data.name,
                email: response.data.email
            })
            
        } catch (error) {
            console.log(error.response);
        }
    }

    render () {
        return (
            <DetailsUserContainer>
                <h2>Detalhes de usuário (a)</h2>
                <div>
                    <p><strong>Nome:  </strong>{this.state.name}</p>
                    <p><strong>E-mail:  </strong>{this.state.email}</p>
                </div>
                <Button onClick={this.props.onClickSeeList} >Voltar</Button>
            </DetailsUserContainer>
        );
    };
};