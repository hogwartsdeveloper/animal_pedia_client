import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { FC, useState } from "react";
import LoginForm from "../components/loginForm";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IInput } from "../types/types";
import { RootStackParamList } from "./rootStackParams";

type signUpScreenProp = StackNavigationProp<RootStackParamList, 'signUp'>

const SignUp: FC = () => {
    const navigation = useNavigation<signUpScreenProp>();
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { isCreateAccount } = useTypedSelector(state => state.user)
    const {fetchCreateNewUser} = useActions()

    const inputs: Array<IInput> = [
        {id: 1, icon: 'mail', placeholder: "Введите email", onChangeText: (text) => setEmail(text), value: email},
        {id: 2, icon: 'lock', placeholder: "Введите пароль", onChangeText: (text) => setPassword(text), value: password},
    ]

    if(isCreateAccount) {
        navigation.navigate('login')
    }

    const registration = (email: string, password: string) => {
        fetchCreateNewUser(email, password)
    }

    const loginNavigate = () => {
        navigation.navigate('login')
    }

    return (
        <LoginForm 
            welcomeText="Save the world"
            welcomeDescription="Cоздайте аккаунт и читайте нас!"
            inputs={inputs}
            buttonText="Регистрация"
            onPress={() => registration(email, password)}
            loginText="Вы зарегистрированы?"
            loginComponent="Войти"
            loginNavigate={loginNavigate}
        />
    );
};

export default SignUp;