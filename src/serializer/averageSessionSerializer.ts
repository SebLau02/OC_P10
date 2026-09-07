import type { AverageSession } from "../types/type";
import { sessionSerializer } from "./sessionSerializer";

export const averageSessionSerializer = (averageSession: AverageSession) => {
  return {
    userId: averageSession.data.userId ?? null,
    sessions: (averageSession.data.sessions ?? []).map((session) =>
      sessionSerializer(session),
    ),
  };
};
