import styled from "styled-components";

export const CardProfile = styled.div`
  margin: 1rem auto;
  width: 90%;
  height: 80px;
  padding: 0.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  border: thin solid #cd2f44;

  div {
    border-radius: 44px;
    width: 80px;
    height: 80px;
    display: flex;
    img {
      width: 80%;
      height: 80%;
      object-fit: contain;
      margin: auto;
      border-radius: 36px;
    }
  }

  p {
    margin-left: 0.5rem;
    font-size: 20px;
    font-weight: 600;
  }
`

export const TitlePage = styled.h2`
  margin: 1rem auto;
  text-align: center;
`

export const Main = styled.main`
  min-height: calc(100vh - 60px - 286.5px);
  @media(max-width: 375px) {
        min-height: calc(100vh - 60px);
    }
`

export const NoMatchesText = styled.div`
  padding: 1rem;
  text-align: center;
  p {
    margin-bottom: 1rem;
  }
`