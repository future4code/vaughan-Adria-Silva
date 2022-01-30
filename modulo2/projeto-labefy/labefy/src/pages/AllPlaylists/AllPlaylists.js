import axios from "axios";
import React from "react";
import { axiosConfig } from "../../constants/headers";
import { BASE_URL } from "../../constants/urls";

import imgCd from "../../img/cd.png";
import imgDelete from "../../img/delete.png";

import { MainContainer } from "./Styles";
import { CreatePlaylist } from "./Styles";
import { AllPlaylistisContainer } from "./Styles";
import { PlaylistContainer } from "./Styles";
import { GoToPlaylistContainer } from "./Styles";
import { Delete } from "./Styles";

export default class AllPlaylists extends React.Component {
    state = {
        playListName: "",
        playlistsList: []
    }

    componentDidMount(){
        this.getAllPlaylists();
    }

    //Funções de evento

    handleInputPlaylist = (event) => {
        this.setState({
            playListName: event.target.value
        });
    };

    inputPressEnter = (event) => {
        if (event.key === 'Enter') {
            this.createPlaylist();
            console.log("enter");
        };
    };

    //Requests
    
    createPlaylist = async (e) => {
        e.preventDefault();
        const body = {
            name: this.state.playListName
        };

        try {
            const response = await axios.post(BASE_URL, body, axiosConfig);
            alert("Nova playlist criada!");
            this.setState({ playListName: "" });
            this.getAllPlaylists();
            console.log(response)
        } catch (err) {
            alert(`Opa, não foi possível criar essa playlist. O erro foi:\n${err.response.data.message}`)
        };
    };

    getAllPlaylists = async () => {
        try {
            const response = await axios.get(BASE_URL, axiosConfig);
            console.log(response.data);
            this.setState({ playlistsList: response.data.result.list });
        } catch (err) {
            alert("Ocorreu um problema!\nPor favor, tente novamente");
        };
    };

    deletePlaylist = async (id) => {
        const deleteConfirmation = "Tem certeza de que deseja deletar esta playlist?"
        if (window.confirm(deleteConfirmation) === true) {
            try {
                const response = await axios.delete(`${BASE_URL}/${id}`, axiosConfig);
                console.log(response);
                this.getAllPlaylists();
            } catch (err) {
                console.log("Deu erro", err.response.data)
            };
        };
    };

    render() {
        console.log(this.state);
        
        const playlists = this.state.playlistsList.map( (list) => {
            return (
                <PlaylistContainer key={list.id}>
                    <GoToPlaylistContainer 
                        onClick={() => this.props.goToAllSongsPage(list.id, list.name)}
                        title="Ver playlist"
                    >
                        <img src={imgCd} alt="Ícone de playlist de música" />
                        <h3>{list.name}</h3>
                    </GoToPlaylistContainer>
                    <Delete onClick={() => this.deletePlaylist(list.id)} title="Deletar playlist">
                        <img src={imgDelete} alt="Ícone de lixeira" />
                    </Delete>
                </PlaylistContainer>
            );
        });
        return (
            <MainContainer>
                <h2>Suas playlists</h2>
                <AllPlaylistisContainer>{playlists}</AllPlaylistisContainer>
                <form>
                    <CreatePlaylist>
                        <legend>Nova Playlist</legend>
                        <input
                            placeholder="Nome da playlist"
                            value={this.state.playListName}
                            onChange={this.handleInputPlaylist}
                            onKeyPress={this.inputPressEnter}
                        />
                        <button onClick={this.createPlaylist} >Criar</button>
                    </CreatePlaylist>
                </form>
            </MainContainer>
        );
    };
}