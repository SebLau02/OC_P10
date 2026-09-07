import type { Session } from "../types/type";

export const sessionSerializer = (session: Session) => {
  return {
    day: session.day ?? "",
    sessionLength: session.sessionLength ?? 0,
  };
};
