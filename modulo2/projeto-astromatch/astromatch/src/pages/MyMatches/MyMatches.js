import { useEffect } from "react";

export default function MyMatches (props) {
    useEffect(() => {
        props.getMatches();
    }, [])

      const matches = props.matchesList.map((match) => {
        return (
            <div key={match.id}>
                <img src={match.photo} alt="Foto do perfil" />
                <p>{match.name}, {match.age}</p>
            </div>
        )
      });
    return (
        <div>
            <h2>My matches</h2>
            {props.matchesList.length === 0
            ? (<div>
              <p>Sem matches por enquanto</p>
              <p>Constinue dando likes nos perfis que você gosta para aumentar as suas chances de ter matches!</p>
            </div>)
            : <div>{matches}</div>         
            }
        </div>        
    );
};