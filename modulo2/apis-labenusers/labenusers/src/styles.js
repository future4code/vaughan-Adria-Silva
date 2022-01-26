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
`

//Estilos do Cadastro.js

export const Button = styled.button`
    margin-top: 32px;
    padding: 8px;
    font-size: 14px;
    border-radius: 15px;
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
    font-size: 14px;
    margin-bottom: 16px;
  }

  button {
    align-self: center;
    margin-top: 16px;
    padding: 8px 12px;
    font-size: 14px;
  }
`

//Estilo da Listagem.js

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`