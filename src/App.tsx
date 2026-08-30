import { Route, Routes } from "react-router-dom";
import UserContext from "./contexts/userContext";
import { Profile } from "./pages";
import { Suspense, useState } from "react";
import type { GetUserBase } from "./types/type";
import { UserLayout } from "./components";

function App() {
  const [user, setUser] = useState<GetUserBase | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route path="/profil/:id" element={<UserLayout />}>
            <Route index element={<Profile />} />
          </Route>
        </Routes>
      </Suspense>
    </UserContext.Provider>
  );
}

export default App;
