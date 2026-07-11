import Logo from "../../assets/logo.png";
import Yoga from "../../assets/yoga.png";
import Natation from "../../assets/natation.png";
import Velo from "../../assets/velo.png";
import Musculation from "../../assets/musculation.png";

const NAV = [
  {
    href: "/accueil",
    label: "Acceuil",
  },
  {
    href: "/profil",
    label: "Profil",
  },
  {
    href: "/reglage",
    label: "Réglage",
  },
  {
    href: "/communaute",
    label: "Communauté",
  },
];
const SPORTS = [
  {
    href: "yoga",
    label: Yoga,
  },
  {
    href: "natation",
    label: Natation,
  },
  {
    href: "velo",
    label: Velo,
  },
  {
    href: "musculation",
    label: Musculation,
  },
];

function MainNav({ children }: { children?: React.ReactNode }) {
  return (
    <div className={`Main-layout`}>
      <nav className="d-flex flex-row align-center px-3 py-2 bg-dark Main-nav">
        <a href="/" className="">
          <img src={Logo} alt="Logo" />
        </a>
        <div className="d-flex flex-row align-center justify-space-between Main-nav__Links w-full mx-auto">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-l text-light none text-light text-xl ${window.location.pathname.includes(item.href) ? "Active" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
      <div className="bg-dark Main-sidebar d-flex justify-center align-center flex-column py-4 h-full">
        <div className="d-flex justify-center align-center flex-column gap-2 mt-auto">
          {SPORTS.map((sport, i) => (
            <a
              key={i}
              href={sport.href}
              className="Button-base Main-sidebar__link"
            >
              <img src={sport.label} />
            </a>
          ))}
        </div>
        <p className="text-xxs text-light Main-sidebar__copyright mt-auto">
          Copiryght, SportSee 2020
        </p>
      </div>
      {children}
    </div>
  );
}

export default MainNav;
