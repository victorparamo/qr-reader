import { useState, useContext, createContext, useEffect, useRef } from 'react';

import { Html5QrcodeScanner, Html5QrcodeScanType } from 'html5-qrcode';

import validateQR from './api';
import { QRValidator, QRValidatorProviderProps, QRData } from './types';

const QRValidatorContext = createContext<QRValidator>({});

function useQRValidator(): QRValidator {
  const context = useContext(QRValidatorContext);

  return context;
}

function QRValidatorProvider({ children }: QRValidatorProviderProps) {
  const scanner = useRef<any>(null);
  const [QRText, setQRText] = useState('');
  const [scanning, setScanning] = useState(false);
  const [QRData, setQRData] = useState<QRData | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function onScanSuccess(decodedText: string, decodedResult: any) {
    setQRText(decodedText);
    setScanning(false);
    const qrResponse = await validateQR(decodedText);
    scanner.current.clear();

    if (qrResponse.status === 'validated') {
      setQRData(qrResponse as QRData);
    }
  }

  function onScanError() {
    return;
  }

  function onStartScanning() {
    scanner.current.render(onScanSuccess, onScanError);
    setScanning(true);
  }

  function handleButtonClick() {
    if (QRText) {
      setQRText('');
      setQRData(null);
    }
    onStartScanning();
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

    scanner.current = html5QrcodeScanner;
  }, []);

  const value = {
    QRText,
    scanning,
    handleButtonClick,
    data: QRData,
  };

  return (
    <QRValidatorContext.Provider value={value}>
      {children}
    </QRValidatorContext.Provider>
  );
}

export { useQRValidator };
export default QRValidatorProvider;
