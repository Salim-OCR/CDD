import React from "react";
import NavigationLink from "./NavigationLink";

const Header = () => {
  return (
    <>
      <NavigationLink />
      <header id="headerHome">
        <h1>
          <span>Classic dream déco </span> Créez des Mondes Magiques dans Leur
          Chambre !
        </h1>
        <div className="pictureBg"></div>
      </header>
    </>
  );
};

export default Header;
