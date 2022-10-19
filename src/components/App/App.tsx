import { useQRValidator } from '../../Providers/ValidatorProvider/ValidatorProvider';

const App = (): JSX.Element => {
  const { scanning, handleButtonClick, QRText } = useQRValidator();

  return (
    <>
      {!scanning ? (
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
