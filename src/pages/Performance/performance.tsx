import { Performance } from "../../components";
import { useUserContext } from "../../contexts/userContext";

function PerformancePage() {
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
        Performances de{" "}
        <span className="text-primary">{user?.userInfos?.firstName}</span>
      </h1>
      <Performance />
    </main>
  );
}

export default PerformancePage;
