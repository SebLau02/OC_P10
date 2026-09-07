import type { KindData } from "../types/type";

export const kindDataSerializer = (kind: KindData) => {
  return {
    value: kind.value ?? 0,
    kind: kind.kind ?? 0,
  };
};
