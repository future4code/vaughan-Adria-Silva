import React from "react";
import AllPlaylists from "./pages/AllPlaylists/AllPlaylists";

class App extends React.Component {
  state = {
    currentScreen: "allPlaylist"
  }

  goToAllPlaylists = () => {
    this.setState({ currentScreen: "allPlaylist" })
  };

  goToAllSongsPlaylists = () => {
    this.setState({ currentScreen: "allSongsPlaylist" })
  };

  goToSong = () => {
    this.setState({ currentScreen: "song" })
  };

  screen = () => {
    switch (this.state.currentScreen) {
      case "allPlaylist":
        return <AllPlaylists playlistSongs={this.goToAllSongsPlaylists}/>;
      case "allSongsPlaylist":
        return <p>Tela de musicas da playlist</p>;
      case "song":
        return <p>Música</p>
      default:
        return <AllPlaylists/>
    }
  }

  render() {
    return (
      <div>
        <h1>Labefy</h1>
        {this.screen()}
      </div>
    );
  };
}

export default App;
