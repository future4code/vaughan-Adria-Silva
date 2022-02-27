import { createTheme } from '@material-ui/core/styles';
import { neutralColor, primaryColor } from './color';

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "white"
    },
    text: {
      primary: neutralColor
    },
  },
});

export default theme;