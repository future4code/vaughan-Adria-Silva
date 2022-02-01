import styled from "styled-components"

export const Body = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 7fr 2fr;
  grid-template-columns: 1fr;
`

export const Header = styled.header`
  background-color: #fe7e02;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;

  h1 {
    margin: 0 0 0 16px;
    font-size: 40px;
  }
`

export const Footer = styled.footer`
  background-color: #a8bbc6;
  color: #45525b;
  padding: 24px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media(max-width: 375px) {
    flex-direction: column;
  }
`

export const FooterTitle = styled.div`
  font-size: x-large;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;

  h2 {
    margin: 0;
  }

`

export const FooterAuthorInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  p {
    text-align: center;
  }
`
export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;

  a {
    text-decoration: none;
    color: #45525b;
  }

  figure {
    display: flex;
    align-items: center;
  }

  img {
    width: 50px;
    height: 50px;
    padding-right: 4px;
  }

  @media(max-width: 375px) {
    flex-direction: column;
  }
`