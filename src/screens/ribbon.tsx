import { FC } from "react";
import { Text, View } from "react-native";
import Header from "../components/header";

const Ribbon: FC = () => {
    return (
        <View>
            <Header />
            <Text>Лента</Text>
        </View>
    );
};

export default Ribbon;