interface RequestObject {
  method: string;
  mode: RequestMode;
  headers: HeadersInit;
  body: string;
  credentials: RequestCredentials;
}

/* eslint-disable no-async-promise-executor */
const validateQR = async (code: string) =>
  new Promise(async (resolve, reject) => {
    const initObject: RequestObject = {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'x-api-key': import.meta.env.VITE_API_KEY as string,
        'Content-Type': 'application/json',
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

      console.log('hola', response);

      if (!response.ok) {
        reject(new Error('Error validating code'));
      }

      const data = await response.json();
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
export default validateQR;
