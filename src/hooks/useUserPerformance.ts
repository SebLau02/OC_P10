import { useEffect, useState } from "react";
import type { Performance } from "../types/type";
import { getUserPerformance } from "../fetches/performance";

export const useGetUserPerformance = (id: number) => {
  const [requestedId, setRequestedId] = useState(id);
  const [data, setData] = useState<Performance | null>(null);
  const [error, setError] = useState<Error | null>(null);

  if (id !== requestedId) {
    setRequestedId(id);
    setData(null);
    setError(null);
  }

  useEffect(() => {
    getUserPerformance({ id }).then(setData).catch(setError);
  }, [id]);

  const isLoading = data === null && error === null;

  return { data, isLoading, error };
};
