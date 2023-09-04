import React from 'react';
import { Link } from "react-router-dom";


const LogoLink = () => {
    return (
      <section id="logos-links">
        <Link to="/">
          <div className="home">🏠</div>
        </Link>
        <Link to="/lits">
          <div className="lits">🛌</div>
        </Link>
        <Link to="/jouets">
          <div className="jouets">🎁</div>
        </Link>
        <Link to="/meubles">
          <div className="meubles">🪑</div>
        </Link>
      </section>
    );
};

export default LogoLink;