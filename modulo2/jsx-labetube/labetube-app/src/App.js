import logo from './logo.svg';
import user from './img/user.png'
import foguinho from './img/trending.png'
import inscricao from './img/subscribe.png'
import originals from './img/letra-l.png'
import history from './img/despertador.png'
import home from './img/botao-home.png'
import './App.css';

function App() {
  const tituloPrincipal = "Lab Tube"
  const tituloVideo = "Título do vídeo"
  const textoFooter = "Os melhores vídeos!"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }
  return (
    <div className="App">
      <div className="tela-inteira">
        <header>
            <h1>{tituloPrincipal}</h1>
            <input type="text" placeholder="Pesquisar" id="campoDeBusca"/>
            <img src={user} alt="Ícone de login deusuário"/>
        </header>

        <main>
            <nav className="menu-vertical">
                <ul>
                    <li className="botoes-meunu-vertical">
                      <img src={home} alt="Ícone de casa"/>
                      <p>Início</p>
                    </li>
                    <li className="botoes-meunu-vertical">
                      <img src={foguinho} alt="Ícone de fogo"/>
                      <p>Em alta</p>
                    </li>
                    <li className="botoes-meunu-vertical">
                      <img src={inscricao} alt="Ícone de inscrição com sininho"/>
                      <p>Inscrições</p>
                    </li>
                    <hr/>
                    <hr/>
                    <li className="botoes-meunu-vertical">
                      <img src={originals} alt="Ícone com L para vídeos originais do Labtube"/>
                      <p>Originais</p>
                    </li>
                    <li className="botoes-meunu-vertical">
                      <img src={history} alt="Ícone de relígio"/>
                      <p>Histórico</p>
                    </li>
                </ul>
            </nav>

            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onClick="reproduzVideo()">
                    <img src={"https://picsum.photos/400/400?a=1 "} alt=""/>
                    <h4>{tituloVideo}</h4>
                </div>
                <div className="box-pagina-principal media2" onClick="reproduzVideo()">
                    <img src={"https://picsum.photos/400/400?a=2 "} alt=""/>
                    <h4>{tituloVideo}</h4>
                </div>
                <div className="box-pagina-principal media3" onClick="reproduzVideo()">
                    <img src={"https://picsum.photos/400/400?a=3 "} alt=""/>
                    <h4>{tituloVideo}</h4>
                </div>
                <div className="box-pagina-principal media4" onClick="reproduzVideo()">
                    <img src={"https://picsum.photos/400/400?a=4 "} alt=""/>
                    <h4>{tituloVideo}</h4>
                </div>
                <div className="box-pagina-principal media5" onClick="reproduzVideo()">
                    <img src={"https://picsum.photos/400/400?a=5 "} alt=""/>
                    <h4>{tituloVideo}</h4>
                </div>
                <div className="box-pagina-principal media6" onClick="reproduzVideo()">
                    <img src={"https://picsum.photos/400/400?a=6 "} alt=""/>
                    <h4>{tituloVideo}</h4>
                </div>
                <div className="box-pagina-principal media7" onClick="reproduzVideo()">
                    <img src={"https://picsum.photos/400/400?a=7 "} alt=""/>
                    <h4>{tituloVideo}</h4>
                </div>
                <div className="box-pagina-principal media8" onClick="reproduzVideo()">
                    <img src={"https://picsum.photos/400/400?a=8 "} alt=""/>
                    <h4>{tituloVideo}</h4>
                </div>
            </section>
        </main>

        <footer>
            <h4>{textoFooter}</h4>
        </footer>
      </div>
    </div>
  );
}

export default App;
