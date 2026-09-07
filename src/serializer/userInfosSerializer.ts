import type { UserBase } from "../types/type";

export const userInfosSerializer = (userInfos: UserBase) => {
  return {
    firstName: userInfos.firstName ?? "Inconnu",
    lastName: userInfos.lastName ?? "Inconnu",
    age: userInfos.age ?? 0,
  };
};
