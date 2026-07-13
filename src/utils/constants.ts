import Glucide from "../assets/carbs.png";
import Protein from "../assets/protein.png";
import Fat from "../assets/fat.png";
import Calories from "../assets/calories.png";

export const STATS = [
  {
    href: "",
    label: "Calories",
    icon: Calories,
    key: "calorieCount",
    extension: "kCal",
  },
  {
    href: "",
    label: "Proteines",
    icon: Protein,
    key: "proteinCount",
    extension: "g",
  },
  {
    href: "",
    label: "Glucides",
    icon: Glucide,
    key: "carbohydrateCount",
    extension: "g",
  },
  {
    href: "",
    label: "Lipides",
    icon: Fat,
    key: "lipidCount",
    extension: "g",
  },
];
