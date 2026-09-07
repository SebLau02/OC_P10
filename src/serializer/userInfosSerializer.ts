import type { UserBase } from "../types/type";

export const userInfosSerializer = (userInfos: UserBase) => {
  return {
    firstname: userInfos.firstName ?? "Inconnu",
    lastname: userInfos.lastName ?? "Inconnu",
    age: userInfos.age ?? "Inconnu",
  };
};
