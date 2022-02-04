export interface UserState {
    currentUser: {};
    isAuth: boolean;
    isCreateAccount: boolean;
}

export enum UserActionTypes {
    SET_USER = "SET_USER",
    LOGOUT = "LOGOUT",
    FETCH_CREATE_ACCOUNT_SUCCESS = "FETCH_CREATE_ACCOUNT_SUCCESS",
    FETCH_CREATE_ACCOUNT_ERROR = "FETCH_CREATE_ACCOUNT_ERROR"
}

interface SetUserAction {
    type: UserActionTypes.SET_USER;
    payload: {}
}

interface LogoutAction {
    type: UserActionTypes.LOGOUT;
}

interface FetchCreateAccountSuccess {
    type: UserActionTypes.FETCH_CREATE_ACCOUNT_SUCCESS;
}

interface FetchCreateAccountError {
    type: UserActionTypes.FETCH_CREATE_ACCOUNT_ERROR;
}

export type UserAction = SetUserAction | LogoutAction | FetchCreateAccountSuccess | FetchCreateAccountError