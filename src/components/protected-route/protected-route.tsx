import React, { FC } from "react";
import { connect } from "react-redux";
import { Redirect, Route, RouteComponentProps } from "react-router";
import { compose } from "redux";

interface IProtectedRouterProps extends RouteComponentProps {
	component: any;
	isAuthenticated: boolean;
	rest: any[];
}

const ProtectedRouterComponent: FC<IProtectedRouterProps> = ({
	component,
	isAuthenticated,
	...rest
}: IProtectedRouterProps) => {
	const routerComponent = (props: any) =>
		isAuthenticated ? React.createElement(component, props) : <Redirect to="/login" />;

	return <Route {...rest} render={routerComponent} />;
};

const mapStateToProps = (state: any): any => {
	return { isAuthenticated: state.user };
};

export const ProtectedRoute = compose(connect(mapStateToProps))(ProtectedRouterComponent);
