import { baseUrl } from "./constants/base_url.js";
import { headersConfig } from "./constants/headers.js";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/header/Header.js"
import Home from "./pages/Home/Home.js"
import MyMatches from "./pages/MyMatches/MyMatches.js"

function App() {
  const [profileToChoose, setProfileToChoose] = useState({});
  const [matchesList, setMatchesList] = useState([]);
  const [screen, setScreen] = useState("home");

  const changeScreen = () => {
    switch (screen) {
      case "home":
        return (<Home/>);
      case "my matches":
        return (<MyMatches />);
      default:
        return (<Home/>);
    }
  };

  useEffect(() => {
    getProfileToChoose();
  }, []);

  const getProfileToChoose = async () => {
    try {
      const response = await axios.get(`${baseUrl}/person`);
      setProfileToChoose(response.data.profile);
      // console.log("profile", profileToChoose);
    } catch (err) {
      console.log(err);
    };
  };

  const postChoosePerson = async (currentId, userChoice) => {
    const body = {
      id: currentId,
      choice: userChoice
    }
    try {
      const response = await axios.post(`${baseUrl}/choose-person`, body, headersConfig);
      getProfileToChoose();
      // console.log(response);
    } catch (err) {
      console.log(err);
    };
  };

  const getMatches = async () => {
    try {
      const response = await axios.get(`${baseUrl}/matches`)
      setMatchesList(response.data.matches)
      // console.log(matchesList);
    } catch (err) {
      console.log(err)
    };
  };

  return (
    <div>
      {/* <button onClick={() => getMatches()}>Ver meus matches</button> */}
      <Header 
        screen={screen}
      />

      <div>
        <h3>{profileToChoose.name}, {profileToChoose.age}</h3>
        <p>{profileToChoose.bio}</p>
        <img src={profileToChoose.photo} alt="Foto de perfil" />
      </div>
      
      <button onClick={() => postChoosePerson(profileToChoose.id, false)}>Não Quero</button>
      <button onClick={() => postChoosePerson(profileToChoose.id, true)}>Quero</button>
      
    </div>
  );
}

export default App;
