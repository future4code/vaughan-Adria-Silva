import like from "./../../images/like.png";
import dislike from "./../../images/cancel.png";
import { baseUrl } from "./../../constants/base_url.js";
import { headersConfig } from "./../../constants/headers.js";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home (props) {
    const [profileToChoose, setProfileToChoose] = useState({});

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
        } catch (err) {
          console.log(err);
        };
      };

    return (
        <main>
            <div>
              <h3>{profileToChoose.name}, {profileToChoose.age}</h3>
              <p>{profileToChoose.bio}</p>
              <img src={profileToChoose.photo} alt="Foto do perfil" />
            </div>
      
            <button onClick={() => postChoosePerson(profileToChoose.id, false)}>
                <img src={dislike} alt="Ícone de descurtir" />
            </button>

            <button onClick={() => postChoosePerson(profileToChoose.id, true)}>
                <img src={like} alt="Ícone de curtir" />
            </button>
        </main>
    );
};