import React from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { axiosConfig } from "../../constants/headers";
import imgDelete from "../../img/delete.png"

import { MainContainer } from "./Styles";
import { Playlist } from "./Styles";
import { AllSongsContainer } from "./Styles";
import { SongContainer } from "./Styles";
import { AddSong } from "./Styles";
import { Delete } from "./Styles";
import { Song } from "./Styles";

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

    // Funções de Evento

    handleInputName = (event) => {
        this.setState({ newSongName: event.target.value });
    };

    handleInputArtist = (event) => {
        this.setState({ newArtist: event.target.value });
    };

    handleInputUrl = (event) => {
        this.setState({ newUrl: event.target.value });
    };

    handleInputPressEnter = (event) => {
        if (event.key === 'Enter') {
            const form = event.target.form;
            console.log("form", form);
            const index = [...form].indexOf(event.target);
            form.elements[index + 1].focus();
            event.preventDefault();
            console.log("enter");
        };
    }

    lastInputPressEnter = (event) => {
        if (event.key === 'Enter') {
            this.onClickAddTrack();
            console.log("enter");
        };
    };

    onClickAddTrack = (e) => {
        e.preventDefault();
        this.addTrackToPlaylist(this.props.idPlaylist);
    }

    trackId = (url) => {
        const slashSplit = url.split("/");
        const questionMarkSplit = slashSplit[4].split("?")
        const trackId = questionMarkSplit[0];
        return `https://open.spotify.com/embed/track/${trackId}`
    }

    //Requests

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
            this.setState({
                newSongName: "",
                newArtist: "",
                newUrl: ""                
            })

        } catch (err) {
            console.log(err.response)
            alert(`Opa, não foi possível adicionar a nova música à playlist. O erro foi:\n${err.response.data.message}`)
        };
    }
    
    removeTrackFromPlaylist = async (idPlaylist, idTrack) => {
        const deleteConfirmation = "Tem certeza de que deseja deletar esta música?"
        if (window.confirm(deleteConfirmation) === true) {
            try {
                const response = await axios.delete(`${BASE_URL}/${idPlaylist}/tracks/${idTrack}`, axiosConfig);
                console.log("Deu certo remover", response)
                this.getPlaylistTracks(this.props.idPlaylist);
            } catch (err) {
                console.log("Deu erro", err.response.data)
            };
        };
    };

    render () {
        console.log(this.state)
        const tracks = this.state.tracksList.map( (song) => {
            return (
                <SongContainer key={song.id}>
                    <Song>
                        <iframe 
                            src={this.trackId(song.url)} 
                            width="80" height="80" 
                            frameborder="0" 
                            allowtransparency="true" 
                            allow="encrypted-media" 
                        />
                        <div>
                            <p><strong>{song.name}</strong></p>
                            <p>by {song.artist}</p>
                        </div>

                    </Song>
                    
                    <Delete onClick={() => this.removeTrackFromPlaylist(this.props.idPlaylist, song.id)} title="Deletar música">
                        <img src={imgDelete}/>
                    </Delete>
                </SongContainer>
            );
        });
        return (
            <MainContainer>
                <h2>Suas músicas</h2>

                <button onClick={this.props.goToPlaylistsPage}>Voltar para playlists</button>
                
                <Playlist>
                    <h3><strong>{this.props.namePlaylist.toUpperCase()}</strong></h3>
                    {this.state.quantity > 1 || this.state.quantity === 0
                        ? <p>{this.state.quantity} faixas</p>
                        : <p>{this.state.quantity} faixa</p>
                    }
                </Playlist>
                
                <AllSongsContainer>{tracks}</AllSongsContainer>

                <form>
                    <AddSong >
                        <legend>Adicionar música</legend>
                        <input 
                            placeholder="Nome da música" 
                            value={this.state.newSongName}
                            onChange={this.handleInputName}
                            onKeyPress={this.handleInputPressEnter}
                        />
                        <input 
                            placeholder="Nome do(a) artista ou da banda" 
                            value={this.state.newArtist}
                            onChange={this.handleInputArtist}
                            onKeyPress={this.handleInputPressEnter}
                        />
                        <input 
                            placeholder="url da música" 
                            value={this.state.newUrl}
                            onChange={this.handleInputUrl}
                            onKeyPress={this.lastInputPressEnter}
                        />
                        <button  onClick={this.onClickAddTrack}>Adicionar música</button>
                    </AddSong>
                </form>
                
            </MainContainer>
        );
    };
};