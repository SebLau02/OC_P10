import { Link } from "react-router-dom";
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
      <Link
        to="../"
        type="button"
        className={`Button-base Button-Outlined Size-Md mb-2 d-inline-block`}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            rotate: "90deg",
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </Link>
      <h1 className="text-xxl mb-4">
        Durée moyenne des sessions de{" "}
        <span className="text-primary">{user?.userInfos?.firstName}</span>
      </h1>
      <AverageSession />
    </main>
  );
}

export default AverageSessions;
