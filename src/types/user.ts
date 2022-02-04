export interface UserState {
    currentUser: {};
    isAuth: boolean;
}

export enum UserActionTypes {
    SET_USER = "SET_USER",
    LOGOUT = "LOGOUT"
}

interface SetUserAction {
    type: UserActionTypes.SET_USER;
    payload: {}
}

interface LogoutAction {
    type: UserActionTypes.LOGOUT;
}

export type UserAction = SetUserAction | LogoutAction