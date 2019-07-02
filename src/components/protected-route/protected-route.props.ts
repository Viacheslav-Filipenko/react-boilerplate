import { RouteProps } from "react-router";

export interface IProtectedRouterProps extends RouteProps {}

export interface IStateProps {
  isAuthenticated: boolean;
}

export type Props = IProtectedRouterProps & IStateProps;
