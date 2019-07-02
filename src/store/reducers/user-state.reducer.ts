export const userStateReducer = (state = false, action: any) => {
	switch (action.type) {
		case "USER_STATE":
			return action.state;
		default:
			return state;
	}
};
