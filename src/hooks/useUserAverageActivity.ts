import { useEffect, useState } from "react";
import { getUserAverageActivity } from "../fetches/average";
import type { AverageSession } from "../types/type";

export const useUserAverageActivity = (id: number) => {
  const [requestedId, setRequestedId] = useState(id);
  const [data, setData] = useState<AverageSession | null>(null);
  const [error, setError] = useState<Error | null>(null);

  if (id !== requestedId) {
    setRequestedId(id);
    setData(null);
    setError(null);
  }

  useEffect(() => {
    getUserAverageActivity({ id }).then(setData).catch(setError);
  }, [id]);

  const isLoading = data === null && error === null;

  return { data, isLoading, error };
};
