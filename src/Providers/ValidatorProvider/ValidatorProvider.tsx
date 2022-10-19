import {
  useState,
  useContext,
  createContext,
  ReactNode,
  useEffect,
  useRef,
} from 'react';

import { Html5QrcodeScanner, Html5QrcodeScanType } from 'html5-qrcode';

import validateQR from './api';

interface QRValidator {
  QRText?: string;
  scanning?: boolean;
  handleButtonClick?: () => void;
}

const QRValidatorContext = createContext<QRValidator>({});

function useQRValidator(): QRValidator {
  const context = useContext(QRValidatorContext);

  return context;
}

interface QRValidatorProviderProps {
  children: ReactNode;
}

function QRValidatorProvider({ children }: QRValidatorProviderProps) {
  const scanner = useRef<any>(null);
  const [QRText, setQRText] = useState('');
  const [scanning, setScanning] = useState(false);

  function onScanSuccess(decodedText: string, decodedResult: any) {
    console.log(`Scan result: ${decodedText}`, decodedResult);
    setQRText(decodedText);
    validateQR(decodedText);
    scanner.current.clear();
    setScanning(false);
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
  };

  return (
    <QRValidatorContext.Provider value={value}>
      {children}
    </QRValidatorContext.Provider>
  );
}

export { useQRValidator };
export default QRValidatorProvider;
