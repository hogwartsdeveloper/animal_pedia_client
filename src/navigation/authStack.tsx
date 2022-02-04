import { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Ribbon from "../screens/ribbon";
import SignUp from "../screens/signUp";
import Login from "../screens/login";
import Tabs from "./tabs";

const { Navigator, Screen } = createStackNavigator();

const AuthStack: FC = () => {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="tab" component={Tabs} />
            <Screen name="signUp" component={SignUp} />
            <Screen name="login" component={Login} />
            <Screen name="ribbon" component={Ribbon} />
            
        </Navigator>
    );
};

export default AuthStack;