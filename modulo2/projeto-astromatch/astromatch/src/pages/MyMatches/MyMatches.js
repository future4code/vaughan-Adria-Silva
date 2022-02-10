import { useEffect } from "react";
import styled from "styled-components";

const CardProfile = styled.div`
  margin: 1rem auto;
  width: 90vw;
  height: 80px;
  padding: 0.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  border: thin solid #cd2f44;

  div {
    border-radius: 44px;
    width: 80px;
    height: 80px;
    display: flex;
    img {
      width: 80%;
      height: 80%;
      object-fit: contain;
      margin: auto;
      border-radius: 36px;
    }
  }

  p {
    margin-left: 0.5rem;
    font-size: 20px;
    font-weight: 600;
  }
`

const TitlePage = styled.h2`
  text-align: center;
`

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
        <div>
            <TitlePage>Seus matches</TitlePage>
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