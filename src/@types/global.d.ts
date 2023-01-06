declare global {
  namespace EasyEventsGlobals {
    interface GetRequestObject {
      method: string;
      mode: RequestMode;
      headers: HeadersInit;
      credencials: RequestCredentials;
    }
  }
}

export {};
