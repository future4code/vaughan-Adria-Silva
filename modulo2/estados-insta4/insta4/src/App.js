import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const FazerPublicacao = styled.div`
  width: 290px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  border-radius: 4px;
  padding: 5px;
  margin: 10px;
  position: sticky;
  top:0;
  background-color: #FFF7F1;

  input {
    width: 270px;
    margin-bottom: 5px;
    font-size: 14px;
  }

`

class App extends React.Component {
  //Inicializando o estado
  state = {
    //O obejo abaixo representa um post no insta
    post: [
      {
      user: "paulinha",
      profilePhoto: "https://picsum.photos/50/50?a=1",
      postPhoto: "https://picsum.photos/200/150?a=2"
      },
      {
        user: "indio",
        profilePhoto: "https://picsum.photos/50/50?a=3",
        postPhoto: "https://picsum.photos/200/150?a=4"
      },
      {
        user: "flavio",
        profilePhoto: "https://picsum.photos/50/50?a=5",
        postPhoto: "https://picsum.photos/200/150?a=6"
      }
    ],
    valorInputUser: "",
    valorInputProfilePhoto: "",
    valorInputPostPhoto: ""
  }

    onChangeInputUser = (event) => {
      this.setState(
        {valorInputUser: event.target.value}
      )
    }

    onChangeInputProfilePhoto = (event) => {
      this.setState(
        {valorInputProfilePhoto: event.target.value}
      )
    }

    onChangeInputPostPhoto = (event) => {
      this.setState(
        {valorInputPostPhoto: event.target.value}
      )
    }

    oneClickAddPost = () => {
      const newPost = {
        user: this.state.valorInputUser,
        profilePhoto: this.state.valorInputProfilePhoto,
        postPhoto: this.state.valorInputPostPhoto
      };

      const addPosts = [
        ...this.state.post,
        newPost
      ];
      
      this.setState({
        post: addPosts,
        valorInputUser: "",
        valorInputProfilePhoto: "",
        valorInputPostPhoto: ""
      })
    }
  
  render() {

    const listaDePosts = this.state.post.map( (publicacao) => {
      return <Post 
        nomeUsuario={publicacao.user}
        fotoUsuario={publicacao.profilePhoto}
        fotoPost={publicacao.postPhoto}
      />
    });
    return (
      <MainContainer>
        {/* <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50?a=1'}
          fotoPost={'https://picsum.photos/200/150?a=2'}
        />

        <Post
          nomeUsuario={'adria'}
          fotoUsuario={'https://picsum.photos/50/50?a=3'}
          fotoPost={'https://picsum.photos/200/150?a=4'}
        />

        <Post
          nomeUsuario={'indio'}
          fotoUsuario={'https://picsum.photos/50/50?a=5'}
          fotoPost={'https://picsum.photos/200/150?a=6'}
        /> */}
        <FazerPublicacao>
        <input
          value={this.state.valorInputUser}
          onChange={this.onChangeInputUser}
          placeholder='Seu nome de usuário'
        />
        <input
          value={this.state.valorInputProfilePhoto}
          onChange={this.onChangeInputProfilePhoto}
          placeholder='https://picsum.photos/50/50?a=(número)'
        />
        <input
          value={this.state.valorInputPostPhoto}
          onChange={this.onChangeInputPostPhoto}
          placeholder='https://picsum.photos/50/50?a=(número)'
        />
        <button onClick={this.oneClickAddPost}>Publicar</button>
        </FazerPublicacao>
        {listaDePosts}
      </MainContainer>
    );
  }
}

export default App;
