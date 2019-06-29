import styled, { createGlobalStyle } from "styled-components";

export const AppHeaderStyled = styled.header`
	background-color: #282c34;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: white;
`;

export const AppLinkStyled = styled.a`
	color: #61dafb;
`;

export const AppStyled = styled.div`
	text-align: center;
`;

export const AppLogoStyled = styled.img`
	animation: App-logo-spin infinite 20s linear;
	height: 40vmin;
	pointer-events: none;

	@keyframes App-logo-spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;

export const GlobalStyled = createGlobalStyle`

    body {
        margin: 0;
        padding: 0;
    }

`;
