import { DailyActivities } from "../../components";
import MainNav from "../../components/MainNav/mainNav";
import { useUserContext } from "../../contexts/userContext";

function Profile() {
  const { user } = useUserContext();

  return (
    <MainNav>
      <main className="p-14">
        <h1 className="text-xxl">
          Bonjour{" "}
          <span className="text-primary">
            {user?.data?.userInfos?.firstName}
          </span>
        </h1>
        <p className="text-md mt-3">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
        <div
          className="d-grid gap-4"
          style={{
            gridTemplateColumns: "3fr 1fr",
            gridTemplateRows: "auto auto",
          }}
        >
          <DailyActivities />
          <div
            style={{
              gridRow: "span 2",
            }}
            className="d-flex flex-column gap-4"
          ></div>
          <DailyActivities />
        </div>
      </main>
    </MainNav>
  );
}

export default Profile;
