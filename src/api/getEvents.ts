/* eslint-disable no-async-promise-executor */
import { EventData } from 'pages/Dashboard/types';

interface EventsResponse {
  Events: Array<EventData>;
}

const getEvents = async (): Promise<EventsResponse> =>
  new Promise(async (resolve, reject) => {
    const initObject: EasyEventsGlobals.GetRequestObject = {
      method: 'GET',
      mode: 'cors',
      credencials: 'include',
      headers: {
        'x-api-key': import.meta.env.VITE_API_KEY as string,
        // TODO: Connect with context
        email: 'easy-events@test.com',
      },
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_VALIDATOR_API as string}/events`,
        initObject
      );

      if (!response.ok) {
        reject(new Error('Error getting hash'));
      }

      const data = await response.json();
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });

export default getEvents;
