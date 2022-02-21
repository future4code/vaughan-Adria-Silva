import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { StyledToobar } from './styles';
import { goToFeed, goToLogin } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    
    const navigate = useNavigate();

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <StyledToobar>
            <Button onClick={ () => goToFeed(navigate)} color="inherit">Labbedit</Button>
            <Button onClick={ () => goToLogin(navigate)} color="inherit">Login</Button>
          </StyledToobar>
        </AppBar>
      </Box>
    );
};

export default Header