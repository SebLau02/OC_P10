import React, { useEffect } from "react";
import { useState } from "react";

const DEFAULT_END_ICON = (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

interface Props {
  name: string;
  label: string;
  onChange?: (e: {
    target: {
      name: string;
      value: string | number;
    };
  }) => void;
  options: {
    label: string;
    value: number;
  }[];
  endIcon?: React.ReactNode;
  value: string | number;
}
function Select({
  onChange,
  options,
  endIcon = DEFAULT_END_ICON,
  name,
}: Props) {
  const [selected, setSelected] = useState<string | number>(options[0].label);
  const [open, setOpen] = useState(false);

  const handleChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.dataset.value || "";
    setSelected(event.currentTarget.textContent || "");
    onChange?.({ target: { name, value: Number(value) } });
    setOpen((prev) => !prev);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".SelectBase")) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="SelectBase">
      <button
        onClick={handleOpen}
        className={`Button-base Button-Outlined Size-Md ${endIcon ? "Button-EndIcon" : ""} ${open ? "Open" : ""}`}
      >
        {selected}

        <span className="Button-EndIcon">{endIcon && endIcon}</span>
      </button>

      {open && (
        <ul className="Select-Base-Menu">
          {options.map((opt, i) => (
            <li key={i} style={{ width: "100%" }}>
              <button
                onClick={handleChange}
                data-value={opt.value}
                style={{
                  width: "100%",
                }}
                className="SelectBase Button-base Size-Md"
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select;
