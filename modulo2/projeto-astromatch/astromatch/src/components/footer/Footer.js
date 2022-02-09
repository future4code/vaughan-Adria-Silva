import linkedin from "./../../images/linkedin.png";
import github from "./../../images/github.png";
import email from "./../../images/email.png";
import reset from "./../../images/reset.png";
import axios from "axios";
import { baseUrl } from "./../../constants/base_url"
import { headersConfig } from "../../constants/headers";

export default function Footer () {

    const putClear = async () => {
        const deleteConfirmation = "Tem certeza de que deseja deletar todos seus matches e histórico de perfis avaliados?"
        if (window.confirm(deleteConfirmation) === true) {
            try {
                const response = await axios.put(`${baseUrl}/clear`, headersConfig);
                console.log(response);
            } catch (err) {
                console.log(err);
            };
        };
    };

    return (
        <footer>
            <div>
                <h3>AstroMatch</h3>
                <p>Um lugar para encontrar as melhores pessoas ou seres que combinam com você</p>
            </div>

            <div>
                <p>Página criada por Ádria Tavares como projeto de fixação de React</p>
                <div>
                    <a href="https://www.linkedin.com/in/adria-tavares/" target="_blank" title="Vamos nos conectar">
                        <img src={linkedin} alt="Logo do Linkedin" />
                    </a>
                    <a href="https://github.com/adriatls" target="_blank" title="Conheça meu portfólio">
                        <img src={github} alt="Logo do GitHub" />
                    </a>
                    <a href="mailto:adria.tavares28@gmail.com?subject=Assunto" title="Entre em contato por email">
                        <img src={email} alt="Logotipo genérico para email" />
                    </a>
                </div>
            </div>
            <button onClick={putClear}>
                <img src={reset} alt="Ícone de reset" />
            </button>
        </footer>
    );
};