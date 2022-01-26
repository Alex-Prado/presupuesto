import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Direcciones = () => {
  return (
    <nav>
      <ol>
        <li>
          <span>enlaces no recomendados</span>
          <a href="/acerca">Acerca</a>
          <a href="/login">Login</a>
          <a href="/">Home</a>
        </li>
        <li>
          <span>usando Link</span>
          <Link to="/">HOME</Link>
          <Link to="/acerca">ACERCA</Link>
          <Link to="/login">LOGIN</Link>
        </li>
        <li>
          <span>usando navlink</span>
          <NavLink to="/acerca" activeClassName="active">ACERCA</NavLink>
          <NavLink to="/login" activeClassName="active">LOGIN</NavLink>
          <NavLink to="/" activeClassName="active">HOME</NavLink>
        </li>
        <li>
            <span>parametros</span>
            <Link to="/usuario/alex">Alex</Link>
            <Link to="/usuario/nieve">Nieve</Link>
        </li>
      </ol>
    </nav>
  );
};
