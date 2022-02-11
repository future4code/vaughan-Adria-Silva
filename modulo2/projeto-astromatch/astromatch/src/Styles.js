import styled from "styled-components";

export const MainContiner = styled.div`
  width: 42%;
  margin: auto;

  @media(max-width: 375px) {
        width: 100%;
    }
`

export const PageContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 2fr 5fr 3fr;
`