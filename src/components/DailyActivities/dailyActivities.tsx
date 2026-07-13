import { max, min } from "d3-array";
import { scaleLinear } from "d3-scale";
import { useUserActivity } from "../../hooks/useUserActivity";
import { useUserContext } from "../../contexts/userContext";
import { roundedTopRectPath } from "../../utils/svg";

const CHART_HEIGHT = 200;
const CHART_WIDTH_PER_DAY = 110;
const MARGIN = { top: 70, right: 50, bottom: 24, left: 40 };
const BAR_WIDTH = 7;
const BAR_RADIUS = 3;

function DailyActivities() {
  const { user } = useUserContext();

  const { data, isLoading, error } = useUserActivity(user?.id ?? 0);

  if (isLoading) return <div>Chargement...</div>;
  if (error || !data) return <div>Erreur lors du chargement de l'activité</div>;

  const { sessions } = data.data;

  const kilogramMax = max(sessions, (d) => d.kilogram) ?? 0;
  const kilogramMin = min(sessions, (d) => d.kilogram) ?? 0;

  const kilogramScale = scaleLinear()
    .domain([kilogramMin - 1, kilogramMax + 1])
    .range([CHART_HEIGHT, 0]);

  const caloriesScale = scaleLinear()
    .domain([0, max(sessions, (d) => d.calories) ?? 0])
    .range([CHART_HEIGHT, 0]);

  const chartWidth = sessions.length * CHART_WIDTH_PER_DAY;
  const yTicks = kilogramScale.ticks(5);

  return (
    <div className="DailyActivities bg-grey-100">
      <div className="d-flex justify-space-between align-center px-4 py-2">
        <p className="text-sm text-grey-850">Activité quotidienne</p>
        <div className="d-flex align-center gap-2">
          <div className="d-flex align-center gap-1">
            <span className="Legend-dot Legend-dot--weight" />
            <p className="text-xs text-grey-700">Poids (kg)</p>
          </div>
          <div className="d-flex align-center gap-1">
            <span className="Legend-dot Legend-dot--calories" />
            <p className="text-xs text-grey-700">Calories brûlées (kCal)</p>
          </div>
        </div>
      </div>
      <svg
        viewBox={`0 0 ${chartWidth + MARGIN.left + MARGIN.right} ${CHART_HEIGHT + MARGIN.top + MARGIN.bottom}`}
        style={{ width: "100%", height: "auto" }}
      >
        <g transform={`translate(${MARGIN.left}, ${MARGIN.top})`}>
          {yTicks.map((tick) => (
            <g key={tick} transform={`translate(0, ${kilogramScale(tick)})`}>
              <line
                x1={0}
                x2={chartWidth}
                className="DailyActivities__gridline"
              />
              <text
                x={chartWidth + 10}
                dy="0.32em"
                className="DailyActivities__axis-label"
              >
                {tick}
              </text>
            </g>
          ))}

          {sessions.map((session, i) => (
            <g
              key={session.day}
              transform={`translate(${i * CHART_WIDTH_PER_DAY}, 0)`}
              className="DailyActivities__bar-group"
            >
              <rect
                className="DailyActivities__bar-group__highlight"
                x={-15}
                y={0}
                width={50}
                height={CHART_HEIGHT}
              />
              <path
                className="DailyActivities__bar--weight"
                d={roundedTopRectPath(
                  0,
                  kilogramScale(session.kilogram),
                  BAR_WIDTH,
                  CHART_HEIGHT - kilogramScale(session.kilogram),
                  BAR_RADIUS,
                )}
              />
              <path
                className="DailyActivities__bar--calories"
                d={roundedTopRectPath(
                  15,
                  caloriesScale(session.calories),
                  BAR_WIDTH,
                  CHART_HEIGHT - caloriesScale(session.calories),
                  BAR_RADIUS,
                )}
              />
              <g
                className="DailyActivities__bar-group__group-details"
                transform={`translate(30, 10)`}
              >
                <rect
                  className="DailyActivities__bar-group__group-details__background"
                  width={60}
                  height={52}
                  rx={4}
                />
                <text
                  className="DailyActivities__bar-group__group-details__text"
                  x={10}
                  y={22}
                >
                  {session.kilogram}kg
                </text>
                <text
                  className="DailyActivities__bar-group__group-details__text"
                  x={10}
                  y={40}
                >
                  {session.calories}Kcal
                </text>
              </g>
              <text
                x={28}
                y={CHART_HEIGHT + 18}
                textAnchor="middle"
                className="DailyActivities__axis-label"
              >
                {i + 1}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

export default DailyActivities;
