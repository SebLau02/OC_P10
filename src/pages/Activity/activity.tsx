import { DailyActivities } from "../../components";

function Activity() {
  return (
    <main
      className="py-8 mx-auto"
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
