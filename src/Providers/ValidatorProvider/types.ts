import { ReactNode } from 'react';

type QRValidatorStatus = 'validated' | 'error';

export interface QRData {
  status: QRValidatorStatus;
  Name: string;
  Phone: string;
  GuestsNumber: string;
  Table: string;
  Id: string;
}

export interface QRValidator {
  QRText: string;
  scanning: boolean;
  handleButtonClick: () => void;
  data: QRData | null;
  error: boolean;
  loading: boolean;
}

export interface QRValidatorProviderProps {
  children: ReactNode;
}

export interface QRValidatorError {
  status: QRValidatorStatus;
  error: string;
}
