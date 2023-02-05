import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const theme = createTheme({
  palette: {
    background: {
      default:
        'linear-gradient(180deg, rgba(17, 17, 17, 0) 0%, rgba(0, 0, 0, 0.19) 0.01%, rgba(0, 0, 0, 0.59) 100%), linear-gradient(90.65deg, #3B4260 2.74%, #3B3755 30.62%, #3C2E4D 59.98%, #3D1E3B 99.34%);',
      paper: '#000000',
    },
    primary: {
      main: '#556cd6',
    },
    secondary: {
      light: '#2a2136',
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    info: {
      main: '#ffffff',
      light: '#c9c9c9',
      dark: '#F0F0F0',
    },
  },
  typography: {
    fontFamily: 'Barlow, sans-serif',
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'md',
      },
      styleOverrides: {
        maxWidthXs: {
          maxWidth: '386px',
          '@media (min-width: 0)': {
            maxWidth: '386px',
          },
        },
        maxWidthSm: {
          maxWidth: '680px',
          '@media (min-width: 600px)': {
            maxWidth: '680px',
          },
        },
        maxWidthMd: {
          maxWidth: '860px',
          '@media (min-width: 900px)': {
            maxWidth: '860px',
          },
        },
      },
    },
  },
});
