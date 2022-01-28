import React from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { axiosConfig } from "../../constants/headers";
import imgDelete from "../AllPlaylists/img/delete.png"

export default class SelectedPlaylist extends React.Component {
    state = {
        tracksList: [],
        quantity: 0,
        url: "",
        newSongName: "",
        newArtist: "",
        newUrl: ""
    }

    componentDidMount(){
        this.getPlaylistTracks(this.props.idPlaylist);
    }

    handleInputName = (event) => {
        this.setState({ newSongName: event.target.value });
    };

    handleInputArtist = (event) => {
        this.setState({ newArtist: event.target.value });
    };

    handleInputUrl = (event) => {
        this.setState({ newUrl: event.target.value });
    };

    onClickAddTrack = () => {
        this.addTrackToPlaylist(this.props.idPlaylist);
    }

    getPlaylistTracks = async (id) => {
        try {
            const response = await axios.get(`${BASE_URL}/${id}/tracks`, axiosConfig);
            console.log("resultado",response);
            this.setState({
                tracksList: response.data.result.tracks,
                quantity: response.data.result.quantity,
            });
        } catch (err) {
            console.log(err.response);
        }
    }

    addTrackToPlaylist = async (id) => {
        const body = {
            name: this.state.newSongName,
            artist: this.state.newArtist,
            url: this.state.newUrl
        }

        try {
            const response = await axios.post(`${BASE_URL}/${id}/tracks`, body, axiosConfig);
            console.log(response);
            alert("Nova música foi adcionada à sua playlist!");
            this.getPlaylistTracks(this.props.idPlaylist);

        } catch (err) {
            console.log(err.response)
            alert(`Opa, não foi possível adicionar a nova música à playlist. O erro foi:\n${err.response.data.message}`)
        };
    }
    
    removeTrackFromPlaylist = async (idPlaylist, idTrack) => {
        try {
            const response = await axios.delete(`${BASE_URL}/${idPlaylist}/tracks/${idTrack}`, axiosConfig);
            console.log("Deu certo remover", response)
            this.getPlaylistTracks(this.props.idPlaylist);
        } catch (err) {
            console.log("Deu erro", err.response.data)
        };
    };

    render () {
        console.log(this.state)
        const tracks = this.state.tracksList.map( (song) => {
            return (
                <div key={song.id}>
                    <p>Música: {song.name}</p>
                    <p>Artista: {song.artist}</p>
                    <p>Link: {song.url}</p>
                    <button onClick={() => this.removeTrackFromPlaylist(this.props.idPlaylist, song.id)}>
                        <img src={imgDelete}/>
                    </button>
                </div>
            );
        });
        return (
            <div>
                <p><strong>{this.props.namePlaylist}</strong></p>
                {this.state.quantity > 1 || this.state.quantity === 0
                    ? <p>{this.state.quantity} faixas</p>
                    : <p>{this.state.quantity} faixa</p>
                }
                <input 
                    placeholder="Nome da música" 
                    value={this.state.newSongName}
                    onChange={this.handleInputName}
                />
                <input 
                    placeholder="Nome do(a) artista ou da banda" 
                    value={this.state.newArtist}
                    onChange={this.handleInputArtist}
                />
                <input 
                    placeholder="url da música" 
                    value={this.state.newUrl}
                    onChange={this.handleInputUrl}
                />
                <button  onClick={this.onClickAddTrack}>Adicionar música</button>
                {tracks}
            </div>
        );
    };
};