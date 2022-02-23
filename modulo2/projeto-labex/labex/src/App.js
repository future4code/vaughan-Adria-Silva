import styled from "styled-components";
import Footer from "./components/footer/footer.js";
import Header from "./components/header/Header.js";
import { Router } from "./route/Router";

const Page = styled.body`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 7.5fr 1.5fr;
`

function App() {

  return (
    <Page>
      <Header />
      <Router />
      <Footer />
    </Page>
  );
};

export default App;
