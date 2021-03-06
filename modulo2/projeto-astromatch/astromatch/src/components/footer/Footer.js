import linkedin from "./../../images/linkedin.png";
import github from "./../../images/github.png";
import email from "./../../images/email.png";
import reset from "./../../images/undo.png";
import axios from "axios";
import { baseUrl } from "./../../constants/base_url"
import { headersConfig } from "../../constants/headers";

import { FooterPages, Button, Slogan, Authorship, FooterContainer } from "./Styles.js"

export default function Footer (props) {

    const putClear = async () => {
        const deleteConfirmation = "Tem certeza de que deseja deletar todos seus matches e histórico de perfis avaliados?"
        if (window.confirm(deleteConfirmation) === true) {
            try {
                const response = await axios.put(`${baseUrl}/clear`, headersConfig);
                props.getProfileToChoose();
                props.getMatches();
            } catch (err) {
                console.log(err);
            };
        };
    };

    return (
        <FooterContainer>
            <Button onClick={putClear} title="Apagar histórico">
                <img src={reset} alt="Ícone de reset" />
                <p>Reset</p>
            </Button>

            <FooterPages>
                <Slogan>
                    <h3>AstroMatch</h3>
                    <p>Um espaço para encontrar as melhores pessoas ou seres que combinam com você</p>
                </Slogan>

                <Authorship>
                    <p>Página criada por Ádria Tavares como projeto de fixação de React</p>
                    <address>
                        <a href="https://www.linkedin.com/in/adria-tavares/" target="_blank" title="Vamos nos conectar">
                            <img src={linkedin} alt="Logo do Linkedin" />
                        </a>
                        <a href="https://github.com/adriatls" target="_blank" title="Conheça meu portfólio">
                            <img src={github} alt="Logo do GitHub" />
                        </a>
                        <a href="mailto:adria.tavares28@gmail.com?subject=Assunto" title="Entre em contato por email">
                            <img src={email} alt="Logotipo genérico para email" />
                        </a>
                    </address>
                </Authorship>
            </FooterPages>
        </FooterContainer>
    );
};