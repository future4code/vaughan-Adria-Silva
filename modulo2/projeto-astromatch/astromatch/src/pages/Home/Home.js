import like from "./../../images/like.png";
import dislike from "./../../images/cancel.png";
import { baseUrl } from "./../../constants/base_url.js";
import { headersConfig } from "./../../constants/headers.js";
import axios from "axios";
import { useEffect } from "react";

export default function Home (props) {

    useEffect(() => {
        props.getProfileToChoose();
      }, []);

    const postChoosePerson = async (currentId, userChoice) => {
        const body = {
          id: currentId,
          choice: userChoice
        }
        try {
          const response = await axios.post(`${baseUrl}/choose-person`, body, headersConfig);
          props.getProfileToChoose();
        } catch (err) {
          console.log(err);
        };
      };

    return (
        <main>
            <div>
              <h3>{props.profileToChoose.name}, {props.profileToChoose.age}</h3>
              <p>{props.profileToChoose.bio}</p>
              <img src={props.profileToChoose.photo} alt="Foto do perfil" />
            </div>
      
            <button onClick={() => postChoosePerson(props.profileToChoose.id, false)}>
                <img src={dislike} alt="Ícone de descurtir" />
            </button>

            <button onClick={() => postChoosePerson(props.profileToChoose.id, true)}>
                <img src={like} alt="Ícone de curtir" />
            </button>
        </main>
    );
};