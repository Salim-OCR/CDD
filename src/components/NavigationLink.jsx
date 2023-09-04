import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const NavigationLink = () => {
  return (
    <nav className="navigation">
      <Logo/>
      <ul>
        <li>
          <NavLink
            to={"/"}
            className={(nav) => (nav.isActive ? "nav-active" : null)}
          >
            accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/lits"}
            className={(nav) => (nav.isActive ? "nav-active" : null)}
          >
            lits
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/meubles"}
            className={(nav) => (nav.isActive ? "nav-active" : null)}
          >
            meubles
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/jouets"}
            className={(nav) => (nav.isActive ? "nav-active" : null)}
          >
            jouets
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationLink;
