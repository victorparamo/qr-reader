import event from './mocks/mockGetEvent';

export interface Guest {
  name: string;
  guests: number;
  table: number;
}

export interface EventResponse {
  name: string;
  date: Date;
  guestsNumber: number;
  guests: Array<Guest>;
  id: string;
}

/* eslint-disable no-async-promise-executor */
const getEvent = async (): Promise<EventResponse> =>
  new Promise(async (resolve, reject) => {
    // const initObject = {
    //   method: 'GET',
    //   mode: 'cors',
    // };

    try {
      setTimeout(() => {
        resolve(event);
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

export default getEvent;
