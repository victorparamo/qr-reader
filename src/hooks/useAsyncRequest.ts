import { useCallback, useEffect, useState } from 'react';

export type UseAsyncRequestCallback<DataT> = (
  ...args: Array<any>
) => Promise<DataT>;

export interface UseAsyncRequestResult<DataT> {
  execute: (...args: Array<any>) => Promise<void>;
  data?: DataT;
  error?: string | Record<string, string>;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

export interface UseAsyncRequestOptions<DataT> {
  /**
   * Execute the callback immediately when component is mounted. If this
   * is true then the callback should not accept any arguments.
   */
  eager?: boolean;
  /**
   * Callback useful to execute side effects when the request fails, e.g.
   * showing a toast with an error message.
   */
  onError?: (error: any) => void;
  /**
   * Callback useful to execute side effects when the request is successful,
   * e.g. showing a toast with a success message.
   */
  onSuccess?: (data: DataT) => void;
}

export type RequestStatus = 'idle' | 'loading' | 'success' | 'error';

/**
 * Hook used to execute async requests and track its progress in a consistent
 * manner. It borrows some concepts from Apollo useQuery without depending on
 * GraphQL and react-query but simpler and does not introduce dependencies.
 */
export default function useAsyncRequest<DataT>(
  callback: UseAsyncRequestCallback<DataT>,
  options?: UseAsyncRequestOptions<DataT>
): UseAsyncRequestResult<DataT> {
  const [state, setState] = useState<RequestStatus>('idle');
  const [data, setData] = useState<DataT | undefined>();
  const [error, setError] = useState();

  const onError = options?.onError;
  const onSuccess = options?.onSuccess;
  const eager = options?.eager;

  const execute = useCallback(
    (...args) => {
      setState('loading');
      setError(undefined);
      setData(undefined);

      return callback(...args)
        .then((response): void => {
          setState('success');
          setData(response);

          if (onSuccess) {
            onSuccess(response);
          }
        })
        .catch((e) => {
          setState('error');
          setError(e);

          if (onError) {
            onError(e);
          }
        });
    },
    [callback, onSuccess, onError]
  );

  useEffect(() => {
    if (eager) {
      execute();
    }
  }, [eager, execute]);

  return {
    data,
    error,
    execute,
    // the following are just for convenience to avoid making the comparisons in the component
    isLoading: state === 'loading',
    isSuccess: state === 'success',
    isError: state === 'error',
  };
}
