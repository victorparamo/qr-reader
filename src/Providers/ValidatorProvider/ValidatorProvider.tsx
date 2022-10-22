import { useState, useContext, createContext, useEffect, useRef } from 'react';

import { Html5QrcodeScanner, Html5QrcodeScanType } from 'html5-qrcode';

import validateQR from './api';
import { QRValidator, QRValidatorProviderProps, QRData } from './types';

const QRValidatorContext = createContext<Partial<QRValidator>>({});

function useQRValidator(): QRValidator {
  const context = useContext(QRValidatorContext);

  return context as QRValidator;
}

function QRValidatorProvider({ children }: QRValidatorProviderProps) {
  const scanner = useRef<any>(null);
  const [QRText, setQRText] = useState('');
  const [scanning, setScanning] = useState(false);
  const [QRData, setQRData] = useState<QRData | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function onScanSuccess(decodedText: string, decodedResult: any) {
    setQRText(decodedText);
    setScanning(false);
    setLoading(true);
    scanner.current.clear();
    const qrResponse = await validateQR(decodedText);

    if (qrResponse.status === 'validated') {
      setQRData(qrResponse as QRData);
    } else {
      setError(true);
    }
    setLoading(false);
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
      setError(false);
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
    error,
    loading,
  };

  return (
    <QRValidatorContext.Provider value={value}>
      {children}
    </QRValidatorContext.Provider>
  );
}

export { useQRValidator };
export default QRValidatorProvider;
