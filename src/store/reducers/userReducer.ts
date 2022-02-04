import { UserAction, UserActionTypes, UserState } from "../../types/user";

const initialState: UserState = {
    currentUser: {},
    isAuth: false,
    isCreateAccount: false
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch(action.type) {
        case UserActionTypes.SET_USER:
            return {...state, currentUser: action.payload, isAuth: true}
        case UserActionTypes.LOGOUT:
            localStorage.removeItem('token')
            return {...state, currentUser: {}, isAuth: false}
        case UserActionTypes.FETCH_CREATE_ACCOUNT_SUCCESS:
            return {...state, isCreateAccount: true}
        case UserActionTypes.FETCH_CREATE_ACCOUNT_ERROR:
            return {...state, isCreateAccount: false}
        default:
            return state
    }
}