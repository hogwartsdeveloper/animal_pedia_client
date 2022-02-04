import { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Ribbon from "../screens/ribbon";
import DashBoard from "../screens/dashBoard";
import Tabs from "./tabs";

const { Navigator, Screen } = createStackNavigator();

const AppStack: FC = () => {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="ribbon" component={Ribbon} />
            <Screen name="dashBoard" component={DashBoard} />
            <Screen name="tab" component={Tabs} />
        </Navigator>
    );
};

export default AppStack;