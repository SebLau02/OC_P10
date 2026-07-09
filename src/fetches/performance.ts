export const getUserPerformance = async ({ id }: { id: number }) => {
  if (!id) throw new Error("Impossible de récupérer l'id de l'utilisateur");
  try {
    const response = await fetch(
      `http://localhost:3000/user/${id}/performance`,
    );
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération de l'activité");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
