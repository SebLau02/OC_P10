import type { GetUserBase } from "../types/type";
import { keyDataSerializer } from "./useKeydataSerializer";
import { userInfosSerializer } from "./userInfosSerializer";

export const userSerializer = (user: GetUserBase) => {
  return {
    id: user.id,
    keyData: keyDataSerializer(user.keyData),
    todayScore: user.todayScore ?? 0,
    userInfos: userInfosSerializer(user.userInfos),
  };
};
