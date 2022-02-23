import starship from "./../../assets/rocket.png";
import { HeaderContainer } from "./styles";

export default function Header () {
    
    return (
        <HeaderContainer>
            <img src={starship} alt="ícone de nave espacial"/>
            <h1>LabeX</h1>
        </HeaderContainer>
    );
};