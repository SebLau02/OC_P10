export const ENV_MODE = import.meta.env.VITE_ENVIRONNEMENT;
export const API_PATH = ENV_MODE === "mock" ? "/data" : "http://localhost:3000";

export const PERFORMANCE_ORDER = [
  "intensity",
  "speed",
  "strength",
  "endurance",
  "energy",
  "cardio",
];

export const DICTIONNAIRE = {
  intensity: "Intensité",
  speed: "Vitesse",
  strength: "Force",
  endurance: "Endurance",
  energy: "Energie",
  cardio: "Cardio",
};
