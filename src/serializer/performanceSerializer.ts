import type { Performance } from "../types/type";
import { kindDataSerializer } from "./kindDataSerializer";

export const performanceSerializer = (performance: Performance) => {
  return {
    userId: performance.data.userId ?? null,
    kind: performance.data.kind ?? {},
    data: (performance.data.data ?? []).map((item) => kindDataSerializer(item)),
  };
};
