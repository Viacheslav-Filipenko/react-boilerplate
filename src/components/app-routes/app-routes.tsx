import React from "react";
import { Route, Switch } from "react-router-dom";

import { HomePage, NotFoundPage } from "../../pages/pages";
import { routes } from "../../config/routes/routes";

export const AppRoutes: React.FC = () => {
	return (
		<React.Fragment>
			<Switch>
				<Route exact={true} path={routes.home} component={HomePage} />
				<Route component={NotFoundPage} />
			</Switch>
		</React.Fragment>
	);
};
