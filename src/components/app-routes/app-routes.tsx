import React from "react";
import { Route, Switch } from "react-router-dom";

import { routes } from "../../config";
import { HomePage, LoginPage, NotFoundPage } from "../../pages/pages";
import { ProtectedRoute } from "../protected-route/protected-route";

export const AppRoutes: React.FC = () => {
  return (
    <React.Fragment>
      <Switch>
        <ProtectedRoute exact={true} path={routes.home} component={HomePage} />
        <Route exact={true} path={routes.login} component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </React.Fragment>
  );
};
