import { StatsCard } from "../../components";
import { useUserContext } from "../../contexts/userContext";
import { STATS } from "../../utils/constants";

function Macros() {
  const { user } = useUserContext();

  return (
    <main
      className="py-8 mx-auto"
      style={{
        maxWidth: "1126px",
        width: "100%",
      }}
    >
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
    </main>
  );
}

export default Macros;
