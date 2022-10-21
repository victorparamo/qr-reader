// import { useState } from 'react';
import Button from '@mui/material/Button';

// import validateQR from '../../Providers/ValidatorProvider/api';
import ValidQR from '../../pages/ValidQR';
import { useQRValidator } from '../../Providers/ValidatorProvider/ValidatorProvider';

const App = (): JSX.Element => {
  // eslint-disable-next-line
  const { scanning, handleButtonClick, QRText, data } = useQRValidator();
  // const [inputVal, setInputVal] = useState('');

  // function handleInput(event: any) {
  //   setInputVal(event.target.value);
  // }

  console.log(data);

  return (
    <>
      {/* <input type="text" value={inputVal} onChange={handleInput} /> */}
      {data ? <ValidQR /> : null}
      {!scanning ? (
        // <button onClick={() => validateQR(inputVal)}>
        <>
          <Button variant="outlined" onClick={handleButtonClick}>
            {QRText ? 'Volver a escanear' : 'Iniciar a escanear'}
          </Button>
        </>
      ) : null}
      <div style={{ width: '250px' }} id="reader"></div>
    </>
  );
};

export default App;
