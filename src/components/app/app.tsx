import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { history } from "../../config/routes/history";
import { store } from "../../store/store";

import { AppRoutes } from "../app-routes/app-routes";
import { Navigation } from "../navigation";
import { GlobalStyled } from "./styles";

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyled />
      <Provider store={store}>
        <Router history={history}>
          <Navigation />
          <AppRoutes />
        </Router>
      </Provider>
    </React.Fragment>
  );
};
