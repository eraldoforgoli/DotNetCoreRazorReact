import {combineReducers, applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import {userReducer} from '../users/usersReducer';
import {UserAction} from "../users/usersActions";

export const rootReducer = combineReducers({
    userReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore<AppState, UserAction, any, any>(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
