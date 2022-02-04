import axios from "axios"
import { Dispatch } from "redux"
import { UserAction, UserActionTypes } from "../../types/user"


export const fetchCreateNewUser = (email: string, password:string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            const response = await axios.post(`http://172.20.10.3:5001/users`, {
                email,
                password
            })
            alert('Аккаунт создан')
            dispatch({type: UserActionTypes.FETCH_CREATE_ACCOUNT_SUCCESS})
        } catch(e) {
            alert('Ошибка при создании аккаунта')
            dispatch({type: UserActionTypes.FETCH_CREATE_ACCOUNT_ERROR})
        }
    }
}

export const login = (email: string, password: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            const response = await axios.post('http://172.20.10.3:5001/auth/login', {
                email,
                password
            })
            dispatch({type: UserActionTypes.SET_USER, payload: response.data})
            alert('Вы успешно вошли в систему')
        } catch(e) {
            console.log(e)
            alert('Ошибка при входе в систему')
        }
    }
}