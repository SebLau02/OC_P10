import { DailyActivities, StatsCard } from "../../components";
import MainNav from "../../components/MainNav/mainNav";
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
          className="d-grid gap-4 mt-8"
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
          >
            {STATS.map((stat) => (
              <StatsCard
                key={stat.key}
                stat={{
                  icon: stat.icon,
                  label: stat.label,
                  extension: stat.extension,
                  value:
                    user?.data?.keyData?.[
                      stat.key as keyof typeof user.data.keyData
                    ]?.toString() ?? "0",
                }}
              />
            ))}
          </div>
          <DailyActivities />
        </div>
      </main>
    </MainNav>
  );
}

export default Profile;
