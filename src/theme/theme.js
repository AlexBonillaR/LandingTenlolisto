import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    gradient: {
      primary: 'linear-gradient(45deg, #7e4dc8, #4389db)',
      diagonal: 'linear-gradient(135deg, rgba(117, 55, 210, 0.74) 0%, transparent 5%, rgba(40, 126, 224, 0.68) 10%)',
    },
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
    background: {
      purpleOverlay: 'rgba(82, 4, 200, 0.55)',
      blueOverlay: 'rgba(18, 121, 239, 0.55)',
    },
    
  },
});
