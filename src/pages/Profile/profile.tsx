import {
  AverageSession,
  DailyActivities,
  Performance,
  Score,
  StatsCard,
} from "../../components";
import { useUserContext } from "../../contexts/userContext";
import Glucide from "../../assets/carbs.png";
import Protein from "../../assets/protein.png";
import Fat from "../../assets/fat.png";
import Calories from "../../assets/calories.png";
import { Link } from "react-router-dom";

const STATS = [
  {
    href: "",
    label: "Calories",
    icon: Calories,
    key: "calorieCount",
    extension: "kCal",
  },
  {
    href: "",
    label: "Proteines",
    icon: Protein,
    key: "proteinCount",
    extension: "g",
  },
  {
    href: "",
    label: "Glucides",
    icon: Glucide,
    key: "carbohydrateCount",
    extension: "g",
  },
  {
    href: "",
    label: "Lipides",
    icon: Fat,
    key: "lipidCount",
    extension: "g",
  },
];

function Profile() {
  const { user } = useUserContext();

  return (
    <main
      className="pt-8 pb-2 mx-auto"
      style={{
        maxWidth: "1126px",
      }}
    >
      <h1 className="text-xxl">
        Bonjour{" "}
        <span className="text-primary">{user?.userInfos?.firstName}</span>
      </h1>
      <p className="text-md mt-3">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
      <div
        id="Stats-section"
        className="d-grid gap-4 mt-8"
        style={{
          gridTemplateRows: "auto auto",
        }}
      >
        <Link to="activity" className="none">
          <DailyActivities />
        </Link>

        <div
          style={{
            gridRow: "span 2",
          }}
          className="d-flex gap-4"
          id="Stats-cards"
        >
          {STATS.map((stat) => (
            <Link key={stat.key} to="macros" className="none">
              <StatsCard
                stat={{
                  icon: stat.icon,
                  label: stat.label,
                  extension: stat.extension,
                  value:
                    user?.keyData?.[
                      stat.key as keyof typeof user.keyData
                    ]?.toString() ?? "0",
                }}
              />{" "}
            </Link>
          ))}
        </div>
        <div className="d-flex flex-row gap-4">
          <Link to="average-sessions" className="none">
            <AverageSession />
          </Link>
          <Link to="performance" className="none">
            <Performance />
          </Link>
          <Link to="goals" className="none">
            <Score />
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Profile;
