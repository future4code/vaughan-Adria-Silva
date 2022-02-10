import like from "./../../images/like.png";
import dislike from "./../../images/cancel.png";
import { baseUrl } from "./../../constants/base_url.js";
import { headersConfig } from "./../../constants/headers.js";
import axios from "axios";
import { Button, ButtonsContainer } from "./Styles";

export default function LikeButtons (props) {

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
        <ButtonsContainer>
            <Button onClick={() => postChoosePerson(props.profileToChooseId, false)}>
                <img src={dislike} alt="Ícone de descurtir" />
            </Button>

            <Button onClick={() => postChoosePerson(props.profileToChooseId, true)}>
                <img src={like} alt="Ícone de curtir" />
            </Button>
        </ButtonsContainer>
    );
};