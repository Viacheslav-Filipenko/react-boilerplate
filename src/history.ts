import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

history.listen((location: any) => {
	console.log(location);
});
