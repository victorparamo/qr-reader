import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';

import AppComponent from 'components/App';
import theme from 'theme';

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
      <AppComponent />
    </Box>
  </ThemeProvider>
);

export default App;
