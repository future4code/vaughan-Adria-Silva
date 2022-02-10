import { useEffect } from "react";
import LikeButtons from "../../components/likeButtons/LikeButtons";
import { CardProfile, ProfileInfo } from "./Styles.js";

export default function Home (props) {

    useEffect(() => {
        props.getProfileToChoose();
      }, []);

    return (
        <main>
            <CardProfile
              style={{
                backgroundImage: `url(${props.profileToChoose.photo})`,
                // filter: blur(8),
                
              }}
            >
              <img src={props.profileToChoose.photo} alt="Foto do perfil" />
              <ProfileInfo>
                <h3>{props.profileToChoose.name}, {props.profileToChoose.age}</h3>
                <p>{props.profileToChoose.bio}</p>
              </ProfileInfo>
            </CardProfile>

            <LikeButtons 
              profileToChooseId={props.profileToChoose.id}
              getProfileToChoose={props.getProfileToChoose}
            />
        </main>
    );
};