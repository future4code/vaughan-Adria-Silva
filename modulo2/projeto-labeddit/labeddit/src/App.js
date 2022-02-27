import { ThemeProvider } from '@mui/material/styles';
import React, { useState } from "react";
import Router from "./routes/Router";
import theme from "./constants/theme.js"
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';

const App = () => {
  const token = localStorage.getItem("token");

  const [logInOut, setLogInOut] = useState(token ? "Logout" : "Login");

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header logInOut={logInOut} setLogInOut={setLogInOut} />
        <Router setLogInOut={setLogInOut} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
