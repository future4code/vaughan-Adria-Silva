import { FooterTitle, FooterAuthorInfo, SocialMedia, FooterContainer } from "./styles";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import email from "../../assets/email.png";

export default function Footer () {
    return (
        <FooterContainer>
            <FooterTitle>
                <h2>LabeX</h2>
                <p>As melhores viagens espaciais em um só lugar</p>
            </FooterTitle>
            <FooterAuthorInfo>
              <p>Página criada por Ádria Tavares como exercício de React</p>
              <SocialMedia>
                  <a href="https://github.com/adriatls" title="Conecte-se">
                      <figure>
                          <img src={linkedin} alt="Ícone do Linkedin" />
                      </figure>
                  </a>

                  <a href="https://github.com/adriatls" title="Acesse meu portfólio">
                      <figure>
                          <img src={github} alt="Ícone do GitHub" />
                      </figure>
                  </a>

                  <a href="mailto:adria.tavares28@gmail.com?subject=Assunto" title="Entre em contato">
                      <figure>
                          <img src={email} alt="Ícone de email" />
                      </figure>
                  </a>
              </SocialMedia>
          </FooterAuthorInfo>
        </FooterContainer>
    );
};