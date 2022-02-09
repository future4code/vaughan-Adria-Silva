import { baseUrl } from "./constants/base_url.js";
import { headersConfig } from "./constants/headers.js";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/header/Header.js"
import Home from "./pages/Home/Home.js"
import MyMatches from "./pages/MyMatches/MyMatches.js"

function App() {
  // const [matchesList, setMatchesList] = useState([]);
  const [screen, setScreen] = useState("home");

  const changeScreen = () => {
    switch (screen) {
      case "home":
        return (
          <Home
          />
        );
      case "myMatches":
        return (<MyMatches />);
      default:
        return (<Home/>);
    }
  };

  const onClickChangeScreen = () => {
    if (screen === "home") {
      setScreen("myMatches");
    } else {
      setScreen("Home");
    };
  };

  // const getMatches = async () => {
  //   try {
  //     const response = await axios.get(`${baseUrl}/matches`)
  //     setMatchesList(response.data.matches)
  //     // console.log(matchesList);
  //   } catch (err) {
  //     console.log(err)
  //   };
  // };

  return (
    <div>
      <Header 
        screen={screen}
        onClickChangeScreen={() => onClickChangeScreen()}
      />

      {changeScreen()}

    </div>
  );
}

export default App;
