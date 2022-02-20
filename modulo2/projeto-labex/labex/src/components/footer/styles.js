import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: #0a121f;
    padding: 16px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 480px) {
        flex-direction: column;
        padding: 16px;
    }
`

export const FooterTitle = styled.div`
  font-size: x-large;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;

  @media(max-width: 480px) {
    margin-bottom: 8px;
    font-size: larger;
    text-align: center;
  }
`

export const FooterAuthorInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
    color: white;
    margin: 4px auto;
  }
`
export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  a {
    text-decoration: none;
  }
  figure {
    display: flex;
    align-items: center;
  }
  img {
    width: 32px;
    height: 32px;
    margin: 4px 6px 0;
    filter: invert(99%) sepia(0%) saturate(1212%) hue-rotate(236deg) brightness(113%) contrast(101%);
  }
`