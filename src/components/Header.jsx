import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const headerAnchors = headerAnchorsData();

  const headerAnchorsElement = headerAnchors.map((anchor) => {
    return (
      <HeaderAnchor key={anchor.id} path={anchor.path} name={anchor.name} />
    );
  });

  const [showMobileNav, setShowMobileNav] = useState(() => false);

  return (
    <header className="bg-primary">
      <div className="p-6 flex justify-end md:justify-start md:max-w-6xl m-auto">
        <i
          onClick={() => handleHeaderBarsClick(setShowMobileNav, true)}
          className="icon-bars text-white text-3xl cursor-pointer md:hidden"
        ></i>

        <nav
          className={`${
            showMobileNav ? "flex" : "hidden"
          } fixed top-0 bottom-0 left-0 right-0 bg-primary justify-center items-center md:block md:static`}
        >
          <ul className="flex flex-col gap-6 relative md:flex-row">
            {headerAnchorsElement}

            <i
              onClick={() => handleHeaderBarsClick(setShowMobileNav, false)}
              className="icon-xmark absolute text-white text-4xl cursor-pointer -top-28 -right-6"
            ></i>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function handleHeaderBarsClick(setShowMobileNav, value) {
  setShowMobileNav(() => value);
}

function HeaderAnchor(props) {
  return (
    <li>
      <Link
        className={`text-white font-medium text-lg cursor-pointer hover:text-secondary transition-colors duration-200 ${
          useLocation().pathname === props.path && "text-secondary"
        }`}
        to={props.path}
      >
        {props.name}
      </Link>
    </li>
  );
}

function headerAnchorsData() {
  return [
    {
      id: 1,
      path: "/",
      name: "Início",
    },
    {
      id: 2,
      path: "/atividades",
      name: "Atividades",
    },
    {
      id: 3,
      path: "/revisoes",
      name: "Revisões",
    },
    {
      id: 4,
      path: "/planejamento",
      name: "Planejamento",
    },
    {
      id: 5,
      path: "/ciclo-de-estudos",
      name: "Ciclo de estudos",
    },
    {
      id: 6,
      path: "/acompanhamento",
      name: "Acompanhamento",
    },
  ];
}
