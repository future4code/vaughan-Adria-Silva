import { baseUrl } from "./constants/base_url.js";
import { headersConfig } from "./constants/headers.js";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/header/Header.js"
import Home from "./pages/Home/Home.js"
import MyMatches from "./pages/MyMatches/MyMatches.js"
import Footer from "./components/footer/Footer.js"

function App() {
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

  return (
    <div>
      <Header 
        screen={screen}
        onClickChangeScreen={() => onClickChangeScreen()}
      />

      {changeScreen()}

    <Footer />
    </div>
  );
}

export default App;
