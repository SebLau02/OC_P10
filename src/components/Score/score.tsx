import { useUserContext } from "../../contexts/userContext";

const CARD_WIDTH = 258;
const CARD_HEIGHT = 263;

function Score() {
  const { user } = useUserContext();

  if (!user) return <div>Loading...</div>;

  const { todayScore } = user.data ?? { todayScore: 0 };

  const RADIUS = 70;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
  const dashLength = todayScore * CIRCUMFERENCE;

  return (
    <div
      style={{
        width: `${CARD_WIDTH}px`,
        height: `${CARD_HEIGHT}px`,
        borderRadius: "5px",
        position: "relative",
      }}
      className="d-flex justify-center align-center bg-grey-100"
    >
      <p
        className="text-sm text-grey-850"
        style={{
          position: "absolute",
          top: 30,
          left: 24,
        }}
      >
        Score
      </p>
      <p
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          maxWidth: "95px",
          lineHeight: "1.4",
        }}
      >
        <span
          className="text-xl text-grey-800"
          style={{
            fontWeight: 700,
            fontSize: "26px",
          }}
        >
          {todayScore * 100}%
        </span>{" "}
        <br />
        <span
          className="text-sm text-grey-700"
          style={{
            fontSize: "16px",
          }}
        >
          de votre objectif
        </span>
      </p>
      <svg width="160" height="160">
        <circle
          cx="80"
          cy="80"
          r={RADIUS}
          strokeWidth="10"
          className="stroke-primary fill-light"
          strokeDasharray={`${dashLength} ${CIRCUMFERENCE}`}
          strokeLinecap="round"
          style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
        />
      </svg>
    </div>
  );
}

export default Score;
