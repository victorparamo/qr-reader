import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';

import { useQRValidator } from 'Providers/ValidatorProvider/ValidatorProvider';

const ValidQR = (): JSX.Element => {
  const { data } = useQRValidator();

  return (
    <>
      <Typography variant="h3" gutterBottom>
        QR Code Readed
      </Typography>
      {data?.Name ? (
        <Typography variant="body1" gutterBottom>
          {data?.Name}
        </Typography>
      ) : null}
      {data?.GuestsNumber ? (
        <Typography variant="body1" gutterBottom>
          {data?.GuestsNumber}
        </Typography>
      ) : null}
      {data?.Id ? (
        <Typography variant="body1" gutterBottom>
          {data?.Id}
        </Typography>
      ) : null}
      <Alert sx={{ position: 'absolute', top: 100 }} severity="success">
        QR Valido!
      </Alert>
    </>
  );
};

export default ValidQR;
