import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../config/routes/routes";

export const Navigation: React.FC = (props) => {
  console.log(props);

  return (
    <div>
      <ul>
        <li>
          <Link to={routes.home}>Home</Link>
        </li>
      </ul>
    </div>
  );
};
