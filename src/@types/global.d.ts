declare global {
  namespace EasyEventsGlobals {
    interface GetRequestObject {
      method: string;
      mode: RequestMode;
      headers: HeadersInit;
      credencials: RequestCredentials;
    }

    interface PostRequestObject {
      method: string;
      mode: RequestMode;
      headers: HeadersInit;
      credencials: RequestCredentials;
      body: string;
    }
  }
}

export {};
