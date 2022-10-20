// import { useState } from 'react';

// import validateQR from '../../Providers/ValidatorProvider/api';
import { useQRValidator } from '../../Providers/ValidatorProvider/ValidatorProvider';

const App = (): JSX.Element => {
  // eslint-disable-next-line
  const { scanning, handleButtonClick, QRText } = useQRValidator();
  // const [inputVal, setInputVal] = useState('');

  // function handleInput(event: any) {
  //   setInputVal(event.target.value);
  // }

  return (
    <>
      {/* <input type="text" value={inputVal} onChange={handleInput} /> */}
      {!scanning ? (
        // <button onClick={() => validateQR(inputVal)}>
        <button onClick={handleButtonClick}>
          {QRText ? 'Reiniciar' : 'Iniciar'}
        </button>
      ) : (
        <></>
      )}
      <div style={{ width: '250px' }} id="reader"></div>
      <h1>QR Code</h1>
      <p>{QRText}</p>
    </>
  );
};

export default App;
