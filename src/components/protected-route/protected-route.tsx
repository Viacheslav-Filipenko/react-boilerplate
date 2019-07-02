import React, { FC } from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import { compose } from "redux";
import { RedirectComponent } from "../redirect/redirect";
import { IStateProps, Props } from "./protected-route.props";

const ProtectedRouteComponent: FC<Props> = ({ component, isAuthenticated, ...rest }: any) => {
  const routeComponent = (props: any) => {
    return isAuthenticated ? React.createElement(component, props) : <RedirectComponent />;
  };

  return <Route {...rest} render={routeComponent} />;
};

const mapStateToProps = (state: any): IStateProps => {
  return { isAuthenticated: state.user };
};

export const ProtectedRoute = compose(connect(mapStateToProps))(ProtectedRouteComponent);
