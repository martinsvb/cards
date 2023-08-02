export enum HTTP_METHODS {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  PUT = "PUT",
  DELETE = "DELETE",
}

export const prepareFetchHeaders = <T>(
  method: HTTP_METHODS,
  signal?: RequestInit["signal"],
  body?: T
) => {
  return {
    method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
    signal,
  };
};
