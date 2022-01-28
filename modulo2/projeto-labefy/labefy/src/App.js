import React from "react";
import AllPlaylists from "./pages/AllPlaylists/AllPlaylists";
import SelectedPlaylist from "./pages/SelectedPlaylist/SelectedPlaylist";

class App extends React.Component {
  state = {
    currentScreen: "allPlaylist",
    // clickedPlaylist: "",
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
      // clickedPlaylist: id,
      clickedPlaylist: {
        idPlaylist: id,
        namePlaylist: name 
      }
      
    });

  };

  goToSongPage = () => {
    this.setState({ currentScreen: "song" });
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
          />
        );
      case "song":
        return <p>Música</p>
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
      <div>
        <h1>Labefy</h1>
        {this.screen()}
      </div>
    );
  };
}

export default App;
