import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../config/routes/routes";

export const Navigation: React.FC = (props) => {
  return (
    <div>
      <ul>
        <li>
          <Link to={routes.home}>Home</Link>
        </li>
        <li>
          <Link to={routes.login}>Login</Link>
        </li>
      </ul>
    </div>
  );
};
