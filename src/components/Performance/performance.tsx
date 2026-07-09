import { Fragment } from "react/jsx-runtime";
import { useUserContext } from "../../contexts/userContext";
import { useGetUserPerformance } from "../../hooks/useUserPerformance";
import { curveLinearClosed, lineRadial, pointRadial } from "d3-shape";

const WIDTH = 180;

const DICTIONNAIRE = {
  cardio: "Cardio",
  energy: "Energie",
  endurance: "Endurance",
  strength: "Force",
  speed: "Vitesse",
  intensity: "Intensité",
};

const CARD_WIDTH = 258;
const CARD_HEIGHT = 263;

function Performance() {
  const { user } = useUserContext();
  const { data } = useGetUserPerformance(user?.data.id ?? 0);

  if (!data) return <div>Loading...</div>;

  const { kind, data: performanceData } = data?.data ?? { kind: {}, data: [] };

  if (!performanceData) return <div>Loading...</div>;

  const result: number[] = performanceData
    .sort((a, b) => a.kind - b.kind)
    .map((item) => item.value);

  const maxValue: number = Math.max(...result);

  const SOMMETS = [1, 0.7, 0.4, 0.15, 0.05, result];
  const hexagon = lineRadial<number>()
    .angle((d, i) => (i * (2 * Math.PI)) / 6)
    .curve(curveLinearClosed);

  const LABEL_RADIUS = WIDTH / 2 + 6; // un peu plus loin que ton anneau le plus large

  return (
    <div
      style={{
        width: `${CARD_WIDTH}px`,
        height: `${CARD_HEIGHT}px`,
        borderRadius: "5px",
        position: "relative",
      }}
      className="d-flex justify-center align-center bg-grey-800"
    >
      <svg width={CARD_WIDTH} height={CARD_WIDTH}>
        {SOMMETS.map((f, i) => (
          <Fragment key={i}>
            <g transform={`translate(${CARD_WIDTH / 2}, ${CARD_WIDTH / 2})`}>
              {(() => {
                const [x, y] = pointRadial(
                  (i * (2 * Math.PI)) / 6,
                  LABEL_RADIUS,
                );
                const anchor = x < -1 ? "end" : x > 1 ? "start" : "middle";

                return (
                  <text
                    x={x}
                    y={y}
                    textAnchor={anchor}
                    className="text-xxs fill-light"
                  >
                    {DICTIONNAIRE[kind[i + 1] as keyof typeof DICTIONNAIRE] ??
                      kind[i + 1]}
                  </text>
                );
              })()}
            </g>
            <g transform={`translate(${CARD_WIDTH / 2}, ${CARD_WIDTH / 2})`}>
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
          </Fragment>
        ))}
      </svg>
    </div>
  );
}

export default Performance;
