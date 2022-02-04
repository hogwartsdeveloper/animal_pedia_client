import { FC, useState } from "react";
import LoginForm from "../components/loginForm";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IInput } from "../types/types";

const Login: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { isAuth } = useTypedSelector(state => state.user)
    const { login } = useActions()

    const inputs: Array<IInput> = [
        {id: 1, icon: 'mail', placeholder: "Введите email", onChangeText: (text) => setEmail(text), value: email},
        {id: 2, icon: 'lock', placeholder: "Введите пароль", onChangeText: (text) => setPassword(text), value: password},
    ]

    return (
        <LoginForm 
            welcomeText="Save the world"
            welcomeDescription="Войдите в свой аккаунт!"
            inputs={inputs}
            buttonText="Войти"
            onPress={() => login(email, password)}
        />
    );
};

export default Login;