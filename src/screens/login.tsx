import { FC, useState } from "react";
import LoginForm from "../components/loginForm";
import { IInput } from "../types/types";

const Login: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const inputs: Array<IInput> = [
        {id: 1, icon: 'mail', placeholder: "Введите email", onChangeText: (text) => setEmail(text)},
        {id: 2, icon: 'lock', placeholder: "Введите пароль", onChangeText: (text) => setPassword(text)},
    ]

    return (
        <LoginForm 
            welcomeText="Save the world"
            welcomeDescription="Хватит жрать животных"
            inputs={inputs}
            buttonText="Войти"
        />
    );
};

export default Login;