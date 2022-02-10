import { baseUrl } from "./constants/base_url.js";
import axios from "axios";
import { useState } from "react";
import Header from "./components/header/Header.js"
import Home from "./pages/Home/Home.js"
import MyMatches from "./pages/MyMatches/MyMatches.js"
import Footer from "./components/footer/Footer.js"

function App() {
  const [screen, setScreen] = useState("home");
  const [profileToChoose, setProfileToChoose] = useState({});
  const [matchesList, setMatchesList] = useState([]);

  const getProfileToChoose = async () => {
    try {
      const response = await axios.get(`${baseUrl}/person`);
      setProfileToChoose(response.data.profile);
      getMatches();
    } catch (err) {
      console.log(err);
    };
  };

  const getMatches = async () => {
    try {
      const response = await axios.get(`${baseUrl}/matches`)
      setMatchesList(response.data.matches)
    } catch (err) {
      console.log(err)
    };
  };

  const changeScreen = () => {
    switch (screen) {
      case "home":
        return (
          <Home
            getProfileToChoose={getProfileToChoose}
            profileToChoose={profileToChoose}
          />
        );
      case "myMatches":
        return (
          <MyMatches
            getMatches={getMatches}
            matchesList={matchesList}
          />
        );
      default:
        return (<Home/>);
    }
  };

  const onClickChangeScreen = () => {
    if (screen === "myMatches") {
      setScreen("home");
    } else {
      setScreen("myMatches");
    };
  };

  return (
    <div>
      <Header 
        screen={screen}
        onClickChangeScreen={() => onClickChangeScreen()}
        matchesList={matchesList}
      />

      {changeScreen()}

    <Footer 
      getProfileToChoose={getProfileToChoose}
      getMatches={getMatches}
    />
    </div>
  );
}

export default App;
