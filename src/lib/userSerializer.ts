import type { GetUserBase } from "../types/type";

export const userSerializer = (user: GetUserBase) => {
  return {
    id: user.id,
    keyData: user.keyData,
    todayScore: user.todayScore ?? 0,
    userInfos: user.userInfos,
  };
};
