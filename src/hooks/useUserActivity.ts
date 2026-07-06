import { useEffect, useState } from "react";
import { getUserActivity } from "../fetches/activity";
import type { GetUserActivityBase } from "../types/type";

export const useUserActivity = (id: number) => {
  const [requestedId, setRequestedId] = useState(id);
  const [data, setData] = useState<GetUserActivityBase | null>(null);
  const [error, setError] = useState<Error | null>(null);

  if (id !== requestedId) {
    setRequestedId(id);
    setData(null);
    setError(null);
  }

  useEffect(() => {
    getUserActivity({ id }).then(setData).catch(setError);
  }, [id]);

  const isLoading = data === null && error === null;

  return { data, isLoading, error };
};
