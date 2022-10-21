import { ReactNode } from 'react';

type QRValidatorStatus = 'validated' | 'error';

export interface QRData {
  status: QRValidatorStatus;
  code: string;
  name: string;
}

export interface QRValidator {
  QRText?: string;
  scanning?: boolean;
  handleButtonClick?: () => void;
  data?: QRData | null;
}

export interface QRValidatorProviderProps {
  children: ReactNode;
}

export interface QRValidatorError {
  status: QRValidatorStatus;
  error: string;
}
