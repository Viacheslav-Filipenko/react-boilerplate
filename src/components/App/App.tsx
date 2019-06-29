import React from "react";
import logo from "../../assets/images/logo.svg";

import { AppHeaderStyled, AppLinkStyled, AppLogoStyled, AppStyled, GlobalStyled } from "./styles";

const App: React.FC = () => {
	return (
		<AppStyled>
			<GlobalStyled />
			<AppHeaderStyled>
				<AppLogoStyled src={logo} alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<AppLinkStyled href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</AppLinkStyled>
			</AppHeaderStyled>
		</AppStyled>
	);
};

export default App;
