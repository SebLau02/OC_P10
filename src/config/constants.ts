export const ENV_MODE = import.meta.env.VITE_ENVIRONNEMENT;
export const API_PATH = ENV_MODE === "mock" ? "/data" : "http://localhost:3000";
