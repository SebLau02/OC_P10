import { useState } from "react";
import { max, min } from "d3-array";
import { scaleLinear, scalePoint } from "d3-scale";
import { curveNatural, line } from "d3-shape";
import { useUserContext } from "../../contexts/userContext";
import { useUserAverageActivity } from "../../hooks/useUserAverageActivity";
import type { Session } from "../../types/type";

const WIDTH = 258;
const HEIGHT = 258;
const DAY_LABELS = ["L", "M", "M", "J", "V", "S", "D"];

function AverageSession() {
  const { user } = useUserContext();
  const { data } = useUserAverageActivity(user?.id ?? 0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { sessions } = data?.data ?? { sessions: [] };

  if (sessions.length === 0) return null;

  const xScale = scalePoint<number>()
    .domain(sessions.map((s) => s.day))
    .range([0, WIDTH])
    .padding(0.5);

  const sessionLengthMin = min(sessions, (d) => d.sessionLength) ?? 0;
  const sessionLengthMax = max(sessions, (d) => d.sessionLength) ?? 0;

  const yScale = scaleLinear()
    .domain([sessionLengthMin * 0.5, sessionLengthMax * 1.2])
    .range([HEIGHT - 40, 40]);

  const lineGenerator = line<Session>()
    .x((d) => xScale(d.day) ?? 0)
    .y((d) => yScale(d.sessionLength))
    .curve(curveNatural);

  const linePath = lineGenerator(sessions);
  const hoveredSession = hoveredIndex !== null ? sessions[hoveredIndex] : null;
  const hoveredX = hoveredSession ? (xScale(hoveredSession.day) ?? 0) : 0;

  return (
    <div
      style={{
        borderRadius: "5px",
        width: WIDTH,
        height: HEIGHT,
        position: "relative",
        overflow: "hidden",
      }}
      className="bg-primary AverageSession"
    >
      <p className="p-4 text-light">Durée moyenne des sessions</p>

      <svg
        width={WIDTH}
        height={HEIGHT}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        {hoveredSession && (
          <rect
            x={hoveredX}
            y={0}
            width={WIDTH - hoveredX}
            height={HEIGHT}
            className="AverageSession__overlay"
          />
        )}

        {linePath && (
          <path d={linePath} className="AverageSession__line" fill="none" />
        )}

        {hoveredSession && (
          <>
            <circle
              cx={hoveredX}
              cy={yScale(hoveredSession.sessionLength)}
              r={10}
              className="AverageSession__dot-halo"
            />
            <circle
              cx={hoveredX}
              cy={yScale(hoveredSession.sessionLength)}
              r={4}
              className="AverageSession__dot"
            />
            <g
              transform={`translate(${hoveredX - 20}, ${yScale(hoveredSession.sessionLength) - 40})`}
            >
              <rect
                className="AverageSession__tooltip"
                width={40}
                height={24}
                rx={2}
              />
              <text
                x={20}
                y={16}
                textAnchor="middle"
                className="AverageSession__tooltip-text text-primary-text"
              >
                {hoveredSession.sessionLength} min
              </text>
            </g>
          </>
        )}

        {sessions.map((session, i) => (
          <text
            key={session.day}
            x={xScale(session.day) ?? 0}
            y={HEIGHT - 16}
            textAnchor="middle"
            className={`AverageSession__day-label ${
              hoveredIndex === i ? "AverageSession__day-label--active" : ""
            }`}
          >
            {DAY_LABELS[session.day - 1]}
          </text>
        ))}

        {sessions.map((session, i) => (
          <rect
            key={session.day}
            x={(xScale(session.day) ?? 0) - WIDTH / sessions.length / 2}
            y={0}
            width={WIDTH / sessions.length}
            height={HEIGHT}
            fill="transparent"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        ))}
      </svg>
    </div>
  );
}

export default AverageSession;
