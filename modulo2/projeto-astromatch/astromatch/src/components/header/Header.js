import logo from "./../../images/love.png";
import fireHeart from "./../../images/heart.png"
import searchHeart from "./../../images/search.png"
import styled from "styled-components";

const Head = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;
`
const Logo = styled.img`
    width: 80px;
`

const Button = styled.button`
    img {
        width: 50px
    }
`
export default function Header(props) {
    return (
        <Head>
            <Logo src={logo} alt="Ícone planeta de coração"/>
            <h1>AstroMatch</h1>
            {props.screen === "home"
            ? (<Button title="Ver meus matches">
                    <img src={fireHeart} alt="Ícone de coração em chamas" />
               </Button>)
            : (<Button title="Voltar para os perfis">
                    <img src={searchHeart} alt="Íconde de lupa com coração" />
               </Button>
            )}
        </Head>
    );
};