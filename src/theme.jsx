import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  // Your other theme configuration options here

  palette: {
    primary: {
      main: '#1aa6b7',
      dark: '#002d40',
    },
    secondary: {
      main: '#d9ecf2', // light blue
    },
  },

  typography: {
    fontFamily: 'Nacelle, sans-serif', // Set your desired font family
    fontSize: 16, // Set the default font size
    fontWeightLight: 300, // Set the light font weight
    fontWeightRegular: 400, // Set the regular font weight
    fontWeightMedium: 500, // Set the medium font weight
    fontWeightBold: 700, // Set the bold font weight
  },
});

export default theme;
