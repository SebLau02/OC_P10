import type { ActivitySession } from "../types/type";

export const activitySessionSerializer = (session: ActivitySession) => {
  return {
    day: session.day ?? "",
    kilogram: session.kilogram ?? 0,
    calories: session.calories ?? 0,
  };
};
