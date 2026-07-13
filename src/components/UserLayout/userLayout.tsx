import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useUserContext } from "../../contexts/userContext";
import { useUser } from "../../hooks/useUser";
import MainNav from "../MainNav/mainNav";

function UserLayout() {
  const { user_id } = useParams();
  const { setUser } = useUserContext();

  const { data: user } = useUser(Number(user_id));

  useEffect(() => {
    if (user) setUser(user.data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <MainNav>
      <Outlet />
    </MainNav>
  );
}

export default UserLayout;
