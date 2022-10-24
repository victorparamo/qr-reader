import Box from '@mui/material/Box';
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles';

import AppComponent from './components/App';
import QRValidatorProvider from './Providers/ValidatorProvider';

let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3fb5a8',
    },
    secondary: {
      main: '#f5c400',
    },
  },
});
theme = responsiveFontSizes(theme);

const App = () => (
  <ThemeProvider theme={theme}>
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
      }}
    >
      <QRValidatorProvider>
        <AppComponent />
      </QRValidatorProvider>
    </Box>
  </ThemeProvider>
);

export default App;
