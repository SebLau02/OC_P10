import { AverageSession } from "../../components";
import { useUserContext } from "../../contexts/userContext";
function AverageSessions() {
  const { user } = useUserContext();
  return (
    <main
      className="pt-8 pb-2 mx-auto"
      style={{
        maxWidth: "1126px",
        width: "100%",
      }}
    >
      <h1 className="text-xxl mb-4">
        Durée moyenne des sessions de{" "}
        <span className="text-primary">{user?.userInfos?.firstName}</span>
      </h1>
      <AverageSession />
    </main>
  );
}

export default AverageSessions;
