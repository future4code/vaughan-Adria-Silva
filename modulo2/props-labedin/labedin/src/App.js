import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';

import meuAvatar from './img/avatar-adria.png';
import ufpe from './img/logo-lmcg.png';
import ufcg from './img/logo-labsmac.jpg';
import location from './img/location.png'
import mail from './img/email.png'

import { CardPequeno } from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={meuAvatar} 
          nome="Ádria Tavares Leite Silva" 
          descricao="Oi, eu me chamo Ádria Tavares. Sou aluna da Labenu na turma Vaughan e sou uma futura desenvolvedora FullStack. Estou aprendendo React pela primeira vez esta semana."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno imagem={mail} contato={'Email'} contatoValor={'adria.tavares28@gmail.com'} />
        <CardPequeno imagem={location} contato={'Endereço'} contatoValor={'Fortaleza, CE'} />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={ufpe}
          nome="Laboratório de Métodos Computacionais em Geomecânica" 
          descricao="Pesquisadora " 
        />
        
        <CardGrande 
          imagem={ufcg} 
          nome="Laboratório de Biocombustíveis e Síntese de Materiais Cerâmicos" 
          descricao="Pesquisadora de iniciação científica" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
