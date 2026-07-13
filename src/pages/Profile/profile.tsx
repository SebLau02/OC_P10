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
      className="py-8 mx-auto"
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
        <DailyActivities />
        <div
          style={{
            gridRow: "span 2",
          }}
          className="d-flex gap-4"
          id="Stats-cards"
        >
          {STATS.map((stat) => (
            <StatsCard
              key={stat.key}
              stat={{
                icon: stat.icon,
                label: stat.label,
                extension: stat.extension,
                value:
                  user?.keyData?.[
                    stat.key as keyof typeof user.keyData
                  ]?.toString() ?? "0",
              }}
            />
          ))}
        </div>
        <div className="d-flex flex-row gap-4">
          <AverageSession />
          <Performance />
          <Score />
        </div>
      </div>
    </main>
  );
}

export default Profile;
