import { useState, useEffect } from "react";
import { HTTP_METHODS, prepareFetchHeaders } from "./configuration";
import { checkResponse } from "./error/checkResponse";

const useFetch = <B, D>(
  input: RequestInfo | URL,
  method: HTTP_METHODS,
  body?: B
) => {
  const [data, setData] = useState<D | null>(null);
  const [error, setError] = useState<unknown | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const doFetch = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          input,
          prepareFetchHeaders<B>(method, signal, body)
        );

        checkResponse(response);

        const json = await response.json();
        if (!signal.aborted) {
          setData(json);
        }
      } catch (e) {
        if (!signal.aborted) {
          setError(e);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    doFetch();

    return () => {
      abortController.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, error, loading };
};

export default useFetch;
