import {
  QRValidatorError,
  QRData,
} from '../../Providers/ValidatorProvider/types';

interface RequestObject {
  method: string;
  mode: RequestMode;
  headers: HeadersInit;
  credencials: RequestCredentials;
  body: string;
}

/* eslint-disable no-async-promise-executor */
const validateQR = async (code: string): Promise<QRData | QRValidatorError> =>
  new Promise(async (resolve, reject) => {
    const initObject: RequestObject = {
      method: 'POST',
      mode: 'cors',
      credencials: 'include',
      headers: {
        'x-api-key': import.meta.env.VITE_API_KEY as string,
      },
      body: JSON.stringify({
        code,
      }),
    };

    try {
      const response = await fetch(
        import.meta.env.VITE_VALIDATOR_API as string,
        initObject
      );

      if (response.status === 401) {
        resolve({ error: 'Unauthorized', status: 'error' });
      }

      if (!response.ok) {
        reject(new Error('Error validating code'));
      }

      const data = await response.json();
      resolve({ ...data, status: 'validated' });
    } catch (e) {
      reject(e);
    }
  });
export default validateQR;
