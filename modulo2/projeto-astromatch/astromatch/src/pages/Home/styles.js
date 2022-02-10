import styled from "styled-components";

export const CardProfile = styled.div`
  margin: 1rem auto;
  width: 320px;
  height: 450px;
  box-shadow: 5px 4px 1rem #3f7196;
  padding: 0.5rem;
  border-radius: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

`
export const ProfileInfo = styled.div`
  margin-left: 0.5rem;
  width: 85%;
  position: relative;
  top: -120px;
  color: white;
  text-shadow: 2px 2px 15px black;

  h3 {
    align-self: flex-start;
  }

  p {
    text-align: justify;
    margin: 0;
    font-size: 18px;
  }
`