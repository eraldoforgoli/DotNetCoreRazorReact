import {SET_ERROR, SET_FETCHING, SET_USERS, UserAction} from "./usersActions";
import {User} from "./";

export interface UserState {
    users: User[];
    hasError: boolean;
    error: string | null;
    fetching: boolean;
}

const initialState: UserState = {
    users: [],
    hasError: false,
    error: null,
    fetching: false
};

export function userReducer(
    state = initialState,
    action: UserAction
): UserState {
    switch (action.type) {
        case SET_FETCHING:
            return {
                ...state,
                fetching: action.isFetching
            };
        case SET_USERS:
            return {
                ...state,
                users: action.response
            };

        case SET_ERROR:
            return {
                ...state,
                hasError: action.hasError,
                error: action.error
            };
        default:
            return state;
    }
}
