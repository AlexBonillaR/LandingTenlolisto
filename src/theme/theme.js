import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#7e4dc8',
      light: '#9c71d7',
      dark: '#5d3996',
    },
    secondary: {
      main: '#4389db',
      light: '#69a1e3',
      dark: '#2f6099',
    },
    gradient: {
      primary: 'linear-gradient(45deg, #7e4dc8, #4389db)',
    },
  },
});
