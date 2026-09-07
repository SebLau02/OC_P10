import type { KeyDataBase } from "../types/type";

export const keyDataSerializer = (keyData: KeyDataBase) => {
  return {
    calorieCount: keyData.calorieCount ?? 0,
    proteinCount: keyData.proteinCount ?? 0,
    carbohydrateCount: keyData.carbohydrateCount ?? 0,
    lipidCount: keyData.lipidCount ?? 0,
  };
};
