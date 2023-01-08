import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';

const WrongQR = (): JSX.Element => (
  <>
    <Typography variant="h3" gutterBottom>
      Error, por favor intentalo de nuevo!
    </Typography>
    <Alert sx={{ position: 'absolute', top: 100 }} severity="error">
      QR no Valido!
    </Alert>
  </>
);

export default WrongQR;
