import { API_PATH, ENV_MODE } from "../config/constants";

export const routeBuilder = (endPoint: string) => {
  return `${API_PATH}/${endPoint}${ENV_MODE === "mock" ? ".json" : ""}`;
};
