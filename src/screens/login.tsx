import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { FC, useState } from "react";
import LoginForm from "../components/loginForm";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IInput } from "../types/types";
import { RootStackParamList } from "./rootStackParams";

type signUpScreenProp = StackNavigationProp<RootStackParamList, 'login'>

const Login: FC = () => {
    const navigation = useNavigation<signUpScreenProp>();
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { isAuth } = useTypedSelector(state => state.user)
    const { login } = useActions()

    const inputs: Array<IInput> = [
        {id: 1, icon: 'mail', placeholder: "Введите email", onChangeText: (text) => setEmail(text), value: email},
        {id: 2, icon: 'lock', placeholder: "Введите пароль", onChangeText: (text) => setPassword(text), value: password},
    ]

    const loginNavigate = () => {
        navigation.navigate('signUp')
    }

    return (
        <LoginForm 
            welcomeText="Save the world"
            welcomeDescription="Войдите в свой аккаунт!"
            inputs={inputs}
            buttonText="Войти"
            onPress={() => login(email, password)}
            loginText="У вас нет аккаунта ?"
            loginComponent="Зарегистрируйтесь"
            loginNavigate={loginNavigate}
        />
    );
};

export default Login;