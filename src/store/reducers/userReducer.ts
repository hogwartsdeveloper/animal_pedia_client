import { UserAction, UserActionTypes, UserState } from "../../types/user";

const initialState: UserState = {
    currentUser: {},
    isAuth: false
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch(action.type) {
        case UserActionTypes.SET_USER:
            return {...state, currentUser: action.payload, isAuth: true}
        case UserActionTypes.LOGOUT:
            localStorage.removeItem('token')
            return {...state, currentUser: {}, isAuth: false}
        default:
            return state
    }
}