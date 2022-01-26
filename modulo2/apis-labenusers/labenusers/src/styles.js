import styled from "styled-components"

//Estilos do App.js

export const Titulo = styled.h1`
  text-align: center;
`

export const CardUsuario = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 375px) {
    width: 300px;
  }
`

//Estilos do Cadastro.js

export const Button = styled.button`
    margin-top: 32px;
    padding: 8px;
    font-size: 14px;
    border-radius: 15px;
    width: 150px;
`

export const Register = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Submit = styled.fieldset`
margin-top: 10px;
  width: 400px;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 8px;
  }
  
  input {
    font-size: 16px;
    margin-bottom: 16px;
  }

  button {
    align-self: center;
    margin-top: 16px;
    padding: 8px 12px;
    font-size: 14px;
  }

  @media(max-width: 375px) {
    width: 300px;
  }
`

//Estilo da Listagem.js

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

//Estilo do DetalheUsuário.js

export const DetailsUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
      width: 270px;
      height: 100px;
      padding: 0 16px;
      border: 1px solid;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      p {
          margin: 0;
          padding: 8px 0;
      }
}
`