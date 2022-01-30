import React from "react";
import AllPlaylists from "./pages/AllPlaylists/AllPlaylists";
import SelectedPlaylist from "./pages/SelectedPlaylist/SelectedPlaylist";

import vinyl from "./img/vinyl.png"
import githug from "./img/github.png"
import linkedin from "./img/linkedin.png"

import { Body } from "./Styles";
import { Header } from "./Styles";
import { Footer } from "./Styles";
import { FooterTitle } from "./Styles";
import { FooterAuthorInfo } from "./Styles";
import { SocialMedia } from "./Styles";



class App extends React.Component {
  state = {
    currentScreen: "allPlaylist",
    clickedPlaylist: {
      idPlaylist: "",
      namePlaylist: ""
    }
  }

  goToPlaylistsPage = () => {
    this.setState({ 
      currentScreen: "allPlaylist",
      clickedPlaylist: "" 
    });
  };

  goToAllSongsPage = (id, name) => {
    this.setState({ 
      currentScreen: "allSongsPlaylist",
      clickedPlaylist: {
        idPlaylist: id,
        namePlaylist: name 
      }
      
    });

  };

  screen = () => {
    switch (this.state.currentScreen) {
      case "allPlaylist":
        return (
          <AllPlaylists 
            goToAllSongsPage={this.goToAllSongsPage}
          />
        );
      case "allSongsPlaylist":
        return (
          <SelectedPlaylist
            goToAllPlaylists={this.goToAllPlaylists}
            // idPlaylist={this.state.clickedPlaylist}
            idPlaylist={this.state.clickedPlaylist.idPlaylist}
            namePlaylist={this.state.clickedPlaylist.namePlaylist}
            goToPlaylistsPage={this.goToPlaylistsPage}
          />
        );
      default:
        return (
          <AllPlaylists 
            goToAllSongsPlaylists={this.goToAllSongsPlaylists}
          />
        );
    }
  }

  render() {
    return (
      <Body>
        <Header>
          <img src={vinyl}/>
          <h1>Labefy</h1>
        </Header>

        <div>{this.screen()}</div>

        <Footer>        
          <FooterTitle>
              <h2>Labefy</h2>
              <h3>todas as suas músicas em um só lugar</h3>
          </FooterTitle>

          <FooterAuthorInfo>
              <p>Página criada por Ádria Tavares como exercício de React</p>
              <SocialMedia>
                  <a href="https://github.com/adriatls">
                      <figure>
                          <img src={linkedin} alt="Ícone do Linkedin" />
                          <figcaption >Linkedin</figcaption>
                      </figure>
                  </a>

                  <a href="https://github.com/adriatls">
                      <figure>
                          <img src={githug} alt="Ícone do GitHub" />
                          <figcaption >GitHub</figcaption>
                      </figure>
                  </a>

              </SocialMedia>
          </FooterAuthorInfo>
        </Footer>
      </Body>
    );
  };
}

export default App;
