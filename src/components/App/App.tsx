import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { history } from '../../config/routes/history'
import { store } from "../../store/store";

import { AppRoutes } from "../app-routes";
import { GlobalStyled } from "./styles";

const App: React.FC = () => {
	return (
		<React.Fragment>
			<GlobalStyled />
			<Provider store={store}>
				<Router history={history}>
					<AppRoutes />
				</Router>
			</Provider>
		</React.Fragment>
	);
};

export default App;
