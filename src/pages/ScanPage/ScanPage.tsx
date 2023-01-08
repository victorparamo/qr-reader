import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

import ValidQR from 'pages/ValidQR';
import WrongQR from 'pages/WrongQR';
import { useQRValidator } from 'Providers/ValidatorProvider/ValidatorProvider';

const ScanPage = (): JSX.Element => {
  const { scanning, handleButtonClick, QRText, data, error, loading } =
    useQRValidator();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        flexDirection: 'column',
      }}
    >
      {loading ? <CircularProgress /> : null}
      {data && !error ? <ValidQR /> : null}
      {error ? <WrongQR /> : null}
      {!scanning && !loading ? (
        <>
          <Button variant="outlined" onClick={handleButtonClick}>
            {QRText ? 'Volver a escanear' : 'Iniciar a escanear'}
          </Button>
        </>
      ) : null}
      <div style={{ width: '250px' }} id="reader"></div>
    </Box>
  );
};

export default ScanPage;
