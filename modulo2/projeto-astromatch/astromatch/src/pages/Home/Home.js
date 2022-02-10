import { useEffect } from "react";
import LikeButtons from "../../components/likeButtons/LikeButtons";

export default function Home (props) {

    useEffect(() => {
        props.getProfileToChoose();
      }, []);

    return (
        <main>
            <div>
              <h3>{props.profileToChoose.name}, {props.profileToChoose.age}</h3>
              <p>{props.profileToChoose.bio}</p>
              <img src={props.profileToChoose.photo} alt="Foto do perfil" />
            </div>

            <LikeButtons 
              profileToChooseId={props.profileToChoose.id}
              getProfileToChoose={props.getProfileToChoose}
            />
        </main>
    );
};