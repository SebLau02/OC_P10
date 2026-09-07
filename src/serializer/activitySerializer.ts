import type { GetUserActivityBase } from "../types/type";
import { activitySessionSerializer } from "./activitySessionSerializer";

export const activitySerializer = (activity: GetUserActivityBase) => {
  return {
    userId: activity.data.userId ?? 0,
    sessions: (activity.data.sessions ?? []).map((session) =>
      activitySessionSerializer(session),
    ),
  };
};
