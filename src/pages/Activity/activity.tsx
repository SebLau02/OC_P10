import { DailyActivities } from "../../components";

function Activity() {
  return (
    <main
      className="pt-8 pb-2 mx-auto"
      style={{
        maxWidth: "1126px",
        width: "100%",
      }}
    >
      <DailyActivities />
    </main>
  );
}

export default Activity;
