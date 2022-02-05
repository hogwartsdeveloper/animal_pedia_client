import { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Ribbon from "../screens/ribbon";
import DashBoard from "../screens/dashBoard";
import Tabs from "./tabs";

const Stack = createStackNavigator();

const AppStack: FC = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="ribbon" component={Ribbon} />
            <Stack.Screen name="dashBoard" component={DashBoard} />
            <Stack.Screen name="tab" component={Tabs} />
        </Stack.Navigator>
    );
};

export default AppStack;