import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';

import Router from 'components/Router';
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
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Box>
  </ThemeProvider>
);

export default App;
