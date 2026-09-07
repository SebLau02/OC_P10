import type { GetUserBase } from "../types/type";
import { keyDataSerializer } from "./useKeydataSerializer";

export const userSerializer = (user: GetUserBase) => {
  return {
    id: user.id,
    keyData: keyDataSerializer(user.keyData),
    todayScore: user.todayScore ?? 0,
    userInfos: user.userInfos,
  };
};
