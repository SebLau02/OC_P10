import { routeBuilder } from "../lib/routeBuilder";

export const getUserAverageActivity = async ({ id }: { id: number }) => {
  if (!id) throw new Error("Impossible de récupérer l'id de l'utilisateur");
  try {
    const response = await fetch(routeBuilder(`user/${id}/average-sessions`));
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération de l'activité");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
