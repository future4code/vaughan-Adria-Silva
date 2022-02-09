import { baseUrl } from "./constants/base_url.js";
import { headersConfig } from "./constants/headers.js";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [profileToChoose, setProfileToChoose] = useState({});

  useEffect(() => {
    getProfileToChoose();
  }, []);

  const getProfileToChoose = async () => {
    try {
      const response = await axios.get(`${baseUrl}/person`);
      setProfileToChoose(response.data.profile);
      console.log("profile", profileToChoose);
    } catch (err) {
      console.log(err);
    };
  };

  // const postChoosePerson = async (currentId, userChoice) => {
  //   const body = {
  //     id: currentId
  //     choice: userChoice
  //   }
  //   try {
  //     const response = await axios.post(`${baseUrl}`, body, headersConfig);
  //   } catch (err) {
  //     console.log(err)
  //   };
  // };
  return (
    <div>
      <h1>AstroMatch</h1>
      <button>Ver meus matches</button>

      <div>
        <h3>{profileToChoose.name}, {profileToChoose.age}</h3>
        <p>{profileToChoose.bio}</p>
        <img src={profileToChoose.photo} alt="Foto de perfil" />
      </div>
      
      {/* <button onClick={() => postChoosePerson(profileToChoose.id, false)}>Não Quero</button> */}
      {/* <button onClick={() => postChoosePerson(profileToChoose.id, true)}>Quero</button> */}
    </div>
  );
}

export default App;
