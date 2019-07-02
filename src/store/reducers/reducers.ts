import { combineReducers } from "redux";
import { userStateReducer } from "./user-state.reducer";

const reducers = combineReducers({
    user: userStateReducer,
});

export default reducers;
