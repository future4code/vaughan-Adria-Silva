import logo from "./../../images/love.png";
import fire from "./../../images/fire.png"
import home from "./../../images/homepage.png"
import { HeaderPages, Slogan, Button } from "./Styles";

export default function Header(props) {
    return (
        <HeaderPages>
            <Slogan>
                <img src={logo} alt="Ícone planeta de coração"/>
                <h1>AstroMatch</h1>
            </Slogan>
    
            {props.screen === "home"
            ? (<Button title="Ver meus matches" onClick={props.onClickChangeScreen} >
                    <img src={fire} alt="Ícone de coração em chamas" />
                    <span>{props.matchesList.length}</span>
               </Button>)
            : (<Button title="Voltar para os perfis" onClick={props.onClickChangeScreen} >
                    <img 
                        src={home} 
                        alt="Íconde de homepage"
                        style={{
                            filter: "invert(61%) sepia(77%) saturate(5696%) hue-rotate(325deg) brightness(99%) contrast(109%)",
                            width: "36px"
                        }}
                    />
               </Button>
            )}
        </HeaderPages>
    );
};