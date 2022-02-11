import { useEffect } from "react";
import { CardProfile, Main, TitlePage, NoMatchesText } from "../MyMatches/styles.js";

export default function MyMatches (props) {
    useEffect(() => {
        props.getMatches();
    }, [])

      const matches = props.matchesList.map((match) => {
        return (
            <CardProfile key={match.id}>
              <div style={{backgroundImage: `url(${match.photo})`}}>
                <img src={match.photo} alt="Foto do perfil" />
              </div>
              <p>{match.name}, {match.age}</p>
            </CardProfile>
        )
      });
    return (
        <Main>
            <TitlePage>Seus matches</TitlePage>
            {props.matchesList.length === 0
            ? (<NoMatchesText>
              <p>Sem matches por enquanto</p>
              <p>Continue dando likes nos perfis que você gosta para aumentar as suas chances de ter matches!</p>
            </NoMatchesText>)
            : <div>{matches}</div>         
            }
        </Main>        
    );
};