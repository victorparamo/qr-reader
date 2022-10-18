import { useState, useEffect } from 'react';

import { Html5QrcodeScanner, Html5QrcodeScanType } from 'html5-qrcode';

import './App.css';

const App = () => {
  console.log(import.meta.env.VITE_VALIDATOR_API);
  console.log(import.meta.env.VITE_API_KEY);

  const [QRText, setQRText] = useState('');
  // eslint-disable-next-line
  function onScanSuccess(decodedText: string, decodedResult: any) {
    console.log(`Scan result: ${decodedText}`, decodedResult);
    setQRText(decodedText);
  }

  function onScanError() {
    console.log('Error scaning');
  }

  useEffect(() => {
    const html5QrcodeScanner = new Html5QrcodeScanner(
      'reader',
      {
        fps: 10,
        qrbox: 250,
        supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
      },
      false
    );

    html5QrcodeScanner.render(onScanSuccess, onScanError);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: '500px' }} id="reader"></div>
        <h1>QR Code</h1>
        <p>{QRText}</p>
      </header>
    </div>
  );
};

export default App;
