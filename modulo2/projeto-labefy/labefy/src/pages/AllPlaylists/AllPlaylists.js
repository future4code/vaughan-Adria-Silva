import axios from "axios";
import React from "react";
import { axiosConfig } from "../../constants/headers";
import { BASE_URL } from "../../constants/urls";
import imgDelete from "./img/delete.png";
import imgPlaylist from "./img/playlist.png"

export default class AllPlaylists extends React.Component {
    state = {
        playListName: "",
        playlistsList: []
    }

    componentDidMount(){
        this.getAllPlaylists();
    }

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
    
    createPlaylist = async () => {
        const body = {
            name: this.state.playListName
        };

        try {
            const response = await axios.post(BASE_URL, body, axiosConfig);
            alert("Nova playlist criada!");
            this.setState({ playListName: "" });
            this.getAllPlaylists();
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
        console.log(id)
        try {
            const response = await axios.delete(`${BASE_URL}/${id}`, axiosConfig);
            console.log(response);
            this.getAllPlaylists();
        } catch (err) {
            console.log("Deu erro", err.response.data)
        }
    };

    render() {
        console.log(this.state);
        
        const playlists = this.state.playlistsList.map( (list) => {
            return (
                <div 
                    key={list.id}
                    onClick={() => this.props.goToAllSongsPage(list.id, list.name)}
                >
                    <img src={imgPlaylist} alt="Ícone de playlist de música" />
                    {list.name}
                    <button onClick={() => this.deletePlaylist(list.id)}>
                        <img src={imgDelete} alt="Ícone de lixeira" />
                    </button>
                </div>
            );
        });
        return (
            <div>
                <input
                    placeholder="Nome da playlist"
                    value={this.state.playListName}
                    onChange={this.handleInputPlaylist}
                    onKeyPress={this.inputPressEnter}
                />
                <button onClick={this.createPlaylist} >Criar playlist</button>
                {playlists}
            </div>
        );
    };
}