interface Props {
  stat: {
    icon: string;
    label: string;
    value: string;
    extension: string;
  };
}

function StatsCard({ stat }: Props) {
  return (
    <div className="StatsCard d-flex flex-row align-items-center gap-3 p-3 bg-grey-100">
      <img
        src={stat.icon}
        alt={stat.label}
        style={{
          width: 60,
        }}
      />
      <div>
        <strong className="text-l">
          {stat.value}
          {stat.extension}
        </strong>
        <p
          className="text-xs"
          style={{
            lineHeight: 1.5,
          }}
        >
          {stat.label}
        </p>
      </div>
    </div>
  );
}

export default StatsCard;
