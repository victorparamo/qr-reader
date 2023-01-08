/* eslint-disable no-async-promise-executor */
import { QRValidatorError, QRData } from 'Providers/ValidatorProvider/types';

const validateQR = async (code: string): Promise<QRData | QRValidatorError> =>
  new Promise(async (resolve, reject) => {
    const initObject: EasyEventsGlobals.PostRequestObject = {
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
        `${import.meta.env.VITE_VALIDATOR_API as string}/qr-validator-api`,
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
