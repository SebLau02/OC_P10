import { useState } from "react";
import { DailyActivities, Select } from "../../components";

const DISPLAY_OPTIONS = [
  {
    label: "Jour",
    value: 1,
  },
  {
    label: "Semaine",
    value: 2,
  },
  {
    label: "Mois",
    value: 3,
  },
  {
    label: "Année",
    value: 4,
  },
];

type FiltersType = {
  display: number | string;
};

const defaultFilters: FiltersType = {
  display: 1,
};

function Activity() {
  const [filters, setFilters] = useState<FiltersType>(defaultFilters);

  const handleChange = (e: {
    target: { name: string; value: string | number };
  }) => {
    const { value, name } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main
      className="py-8 mx-auto"
      style={{
        maxWidth: "1126px",
        width: "100%",
      }}
    >
      <div className="d-flex flex-row flex-wrap mb-4">
        <Select
          label="Par"
          options={DISPLAY_OPTIONS}
          value={filters.display}
          onChange={handleChange}
          name="display"
        />
      </div>
      <DailyActivities />
    </main>
  );
}

export default Activity;
