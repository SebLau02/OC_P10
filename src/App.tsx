import UserContext from "./contexts/userContext";
import { useUser } from "./hooks/useUser";
import Profile from "./pages";

function App() {
  const { data: user } = useUser(12);

  if (!user) {
    return <>Utilisateur non trouvé</>;
  }

  return (
    <UserContext.Provider value={{ user, setUser: () => {} }}>
      <Profile />
    </UserContext.Provider>
  );
}

export default App;
