import React from "react";
import { NavLink } from "react-router-dom";

export default () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/" />
        Signup
      </li>
      <li>
        <NavLink to="/">Log Login</NavLink>
      </li>
    </ul>
  );
};
