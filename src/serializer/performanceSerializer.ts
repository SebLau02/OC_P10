import type { Performance } from "../types/type";
import { kindDataSerializer } from "./kindDataSerializer";
import { PERFORMANCE_ORDER } from "../config/constants";

export const performanceSerializer = (performance: Performance) => {
  const kind = performance.data.kind ?? {};
  const data = (performance.data.data ?? [])
    .map((item) => kindDataSerializer(item))
    .sort(
      (a, b) =>
        PERFORMANCE_ORDER.indexOf(kind[a.kind]) -
        PERFORMANCE_ORDER.indexOf(kind[b.kind]),
    );

  return {
    userId: performance.data.userId ?? null,
    kind,
    data,
  };
};
