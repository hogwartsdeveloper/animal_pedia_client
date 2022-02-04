import axios from "axios"
import { Dispatch } from "redux"
import { UserAction } from "../../types/user"


export const registration = async (email: string, password:string) => {
    try {
        const response = await axios.post(`http://172.20.10.4:5001/users`, {
            email,
            password
        })
        alert('Аккаунт создан')
    } catch(e) {
        alert(e)
    }
}