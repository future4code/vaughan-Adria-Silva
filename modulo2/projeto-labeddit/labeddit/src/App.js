import { ThemeProvider } from '@mui/material/styles';
import React from "react";
import Router from "./routes/Router";
import theme from "./constants/theme.js"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
