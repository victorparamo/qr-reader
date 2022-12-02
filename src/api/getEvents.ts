import { EventData } from 'pages/Dashboard/Dashboard';

import events from './mocks/mockGetEvents';

interface EventsResponse {
  events: Array<EventData>;
}

/* eslint-disable no-async-promise-executor */
const getEvents = async (): Promise<EventsResponse> =>
  new Promise(async (resolve, reject) => {
    // const initObject = {
    //   method: 'GET',
    //   mode: 'cors',
    // };

    try {
      setTimeout(() => {
        resolve({ events });
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

export default getEvents;
