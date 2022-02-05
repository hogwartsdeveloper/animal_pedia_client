import { NavigationContainer } from "@react-navigation/native";
import { FC } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import AppStack from "./appStack";
import AuthStack from "./authStack";

const MainNav: FC = () => {
    const {currentUser, isAuth} = useTypedSelector(state => state.user)

    return (
        <NavigationContainer>
            {isAuth ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
};

export default MainNav;