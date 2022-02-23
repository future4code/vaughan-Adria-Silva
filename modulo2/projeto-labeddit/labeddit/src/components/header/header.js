import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { StyledToobar } from './styles';
import { goToFeed, goToLogin } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';

const Header = ({logInOut, setLogInOut}) => {    
    const navigate = useNavigate();
    const token = localStorage.getItem("token")

    const logInOutButtonAction = () => {
      if (token) {
        localStorage.removeItem("token");
        setLogInOut("Login");
        goToLogin(navigate);
      } else {
        goToLogin(navigate);
      }
    };

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <StyledToobar>
            <Button onClick={ () => goToFeed(navigate)} color="inherit">Labbedit</Button>
            <Button onClick={logInOutButtonAction} color="inherit">{logInOut}</Button>
          </StyledToobar>
        </AppBar>
      </Box>
    );
};

export default Header