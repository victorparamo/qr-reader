interface PasswordResponse {
  userId: number;
}

/* eslint-disable no-async-promise-executor */
const passwordLogin = async (): Promise<PasswordResponse> =>
  new Promise(async (resolve, reject) => {
    // const initObject = {
    //   method: 'GET',
    //   mode: 'cors',
    // };

    try {
      setTimeout(() => {
        resolve({ userId: 1235 });
      }, 3000);
      // const responseWithHash = await fetch(
      //   'https://blockchain.info/latestblock?cors=true',
      //   initObject
      // );

      // if (!responseWithHash.ok) {
      //   reject(new Error('Error getting hash'));
      // }

      // const { hash } = await responseWithHash.json();

      // const response = await fetch(
      //   `https://blockchain.info/rawblock/${hash}?cors=true`,
      //   initObject
      // );

      // if (!response.ok) {
      //   reject(new Error('Error getting data'));
      // }

      // const data = await response.json();
      // resolve(data);
    } catch (e) {
      reject(e);
    }
  });

export default passwordLogin;
