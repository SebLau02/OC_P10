import { useUserContext } from "../../contexts/userContext";
import { useGetUserPerformance } from "../../hooks/useUserPerformance";
import { curveLinearClosed, lineRadial } from "d3-shape";

const WIDTH = 180;
const HEIGHT = WIDTH;

function Performance() {
  const { user } = useUserContext();
  const { data } = useGetUserPerformance(user?.data.id ?? 0);

  const { kind, data: performanceData } = data?.data ?? {};

  if (!performanceData) return <div>Loading...</div>;

  const result: number[] = performanceData
    .sort((a, b) => a.kind - b.kind)
    .map((item) => item.value);

  const maxValue: number = Math.max(...result);

  console.log(kind);

  const SOMMETS = [1, 0.7, 0.4, 0.15, 0.05, result];
  const hexagon = lineRadial<number>()
    .angle((d, i) => (i * (2 * Math.PI)) / 6)
    .curve(curveLinearClosed);

  return (
    <div
      style={{
        width: "258px",
        height: "263px",
        borderRadius: "5px",
        position: "relative",
      }}
      className="d-flex justify-center align-center bg-grey-800"
    >
      {Object.entries(kind).map(([key, value], index) => (
        <p className="textsm">{value}</p>
      ))}
      <svg width={WIDTH} height={HEIGHT}>
        {SOMMETS.map((f, i) => (
          <g transform={`translate(${WIDTH / 2}, ${HEIGHT / 2})`} key={i}>
            <path
              d={
                hexagon.radius((d, j) => {
                  const value = (result[j] / maxValue) * 0.97;
                  return (WIDTH / 2) * (Array.isArray(f) ? value : f);
                })(SOMMETS as number[]) ?? ""
              }
              fill="none"
              stroke="white"
              strokeWidth="2"
              className={
                i === SOMMETS.length - 1
                  ? "stroke-primary fill-primary opacity-70"
                  : ""
              }
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

export default Performance;
