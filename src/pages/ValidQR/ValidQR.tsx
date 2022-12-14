import Typography from '@mui/material/Typography';

import { useQRValidator } from '../../Providers/ValidatorProvider/ValidatorProvider';

import SuccessAlert from './styles';

const ValidQR = (): JSX.Element => {
  const { QRText } = useQRValidator();

  return (
    <>
      <Typography variant="h3" gutterBottom>
        QR Code Readed
      </Typography>
      <Typography variant="body1" gutterBottom>
        {QRText}
      </Typography>
      <SuccessAlert severity="success">QR Valido!</SuccessAlert>
    </>
  );
};

export default ValidQR;
