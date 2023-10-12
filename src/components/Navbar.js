import React, { useState } from "react";

import "../style/Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        WebTail
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/table">Table</NavLink>
        </li>
        <li>
          <NavLink to="/linechart">Line Chart</NavLink>
        </li>
      </ul>
    </nav>
  );
};
