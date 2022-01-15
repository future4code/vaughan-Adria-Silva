import React from "react";
import './App.css';
import styled from "styled-components";

const DialogBox = styled.div`
  height: 100vh;
  border: solid #fe7e02;
  width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #e3e8eb;
`

const InputsArea = styled.div`
  height: 7vh;
  width: 100%;
  display: flex;
`

const InputName = styled.input`
  flex-grow: 0;
  margin: 0.4rem;
  font-size: 16px;
  border-radius: 16px;
`
const InputMessage = styled.input`
  flex-grow: 1;
  margin: 0.4rem 0.4rem 0.4rem 0;
  font-size: 16px;
  border-radius: 16px;
`
const ButtonSent = styled.button`
  flex-grow: 0;
  margin: 0.4rem 0.4rem 0.4rem 0;
  font-size: 16px;
  border-radius: 12px;
`

const Text = styled.div`
  max-width: 60%;
  min-width: 8%;
  margin: 1em 0.5em 0 0.5em;
  word-wrap: break-word;
  background-color: #f9b24e;
  border-radius: 14px;
  padding: 1px;
`

class App extends React.Component {
  state = {
    messageHistory: [],
    inputUserName: "",
    inputUserMessage: ""
  }

    onChangeName = (event) => {
      this.setState(
        {
          inputUserName: event.target.value
        }
      )
    };

    onChangeMessage = (event) => {
      this.setState(
        {
          inputUserMessage: event.target.value
        }
      )
    };

    onClickSend = () => {
      const newMessage = {
        userName: this.state.inputUserName,
        userMessage: this.state.inputUserMessage
      };

      const updateMessageHistory = [
        ...this.state.messageHistory,
        newMessage
      ];

      this.setState({
        messageHistory: updateMessageHistory,
        inputUserName: "",
        inputUserMessage: ""
      });
    };

    onKeyPressEnter = (event) => {
      if (event.key === 'Enter') {
        this.onClickSend();
      }
    };

  render() {

    const historic = this.state.messageHistory.map( (messageSent) => {
      return (
        <Text>
          <p><strong>{messageSent.userName}:</strong> {messageSent.userMessage}</p>
        </Text>
      );
    });

    return (
      <DialogBox>
        <div>
          {historic}
        </div>
        
        <InputsArea>
          <InputName
            onChange={this.onChangeName}
            onKeyPress={this.onKeyPressEnter}
            value={this.state.inputUserName} 
            placeholder="Nome do usuário"
          />
          <InputMessage
            onChange={this.onChangeMessage}
            onKeyPress={this.onKeyPressEnter}
            value={this.state.inputUserMessage} 
            placeholder="Mensagem"
          />
          <ButtonSent 
            onClick={this.onClickSend}
            type="submit"
          >Enviar</ButtonSent>
        </InputsArea>
      </DialogBox>
    );

  };
}

export default App;
