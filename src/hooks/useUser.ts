import { useEffect, useState } from "react";
import { getUser } from "../fetches/user";
import type { ApiResBase, GetUserBase } from "../types/type";
import { userSerializer } from "../serializer/userSerializer";

export const useUser = (id: number) => {
  const [requestedId, setRequestedId] = useState(id);
  const [data, setData] = useState<ApiResBase<GetUserBase> | null>(null);
  const [error, setError] = useState<Error | null>(null);

  if (id !== requestedId) {
    setRequestedId(id);
    setData(null);
    setError(null);
  }

  useEffect(() => {
    getUser({ id })
      .then((data) => setData({ data: userSerializer(data.data) }))
      .catch(setError);
  }, [id]);

  const isLoading = data === null && error === null;

  return { data, isLoading, error };
};
