import { FC, useState } from "react";
import LoginForm from "../components/loginForm";
import { fetchCreateNewUser } from "../store/action-creators/user";
import { IInput } from "../types/types";

const SignUp: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const inputs: Array<IInput> = [
        {id: 1, icon: 'mail', placeholder: "Введите email", onChangeText: (text) => setEmail(text), value: email},
        {id: 2, icon: 'lock', placeholder: "Введите пароль", onChangeText: (text) => setPassword(text), value: password},
    ]

    const registration = (email: string, password: string) => {
        fetchCreateNewUser(email, password)
        setEmail('')
        setPassword('')
    }

    return (
        <LoginForm 
            welcomeText="Save the world"
            welcomeDescription="Хватит жрать животных"
            inputs={inputs}
            buttonText="Регистрация"
            onPress={() => registration(email, password)}
        />
    );
};

export default SignUp;