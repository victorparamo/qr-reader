import Typography from '@mui/material/Typography';

import WrongAlert from './styles';

const WrongQR = (): JSX.Element => (
  <>
    <Typography variant="h3" gutterBottom>
      Error, por favor intentalo de nuevo!
    </Typography>
    <WrongAlert severity="error">QR no Valido!</WrongAlert>
  </>
);

export default WrongQR;
