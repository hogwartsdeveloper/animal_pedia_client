import { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Ribbon from "../screens/ribbon";
import SignUp from "../screens/signUp";
import Login from "../screens/login";
import Tabs from "./tabs";

const Stack = createStackNavigator();

const AuthStack: FC = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="tab" component={Tabs} />
            <Stack.Screen name="signUp" component={SignUp} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="ribbon" component={Ribbon} />
            
        </Stack.Navigator>
    );
};

export default AuthStack;