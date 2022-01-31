import { FC } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Poppins_900Black, useFonts } from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import SearchInput from "./searchInput";

const Header: FC = () => {
    const [fontsLoaded] = useFonts({
        Poppins_900Black
    });

    if (!fontsLoaded) {
        return <AppLoading />
    }

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Animal pediA</Text>
            <SearchInput />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginTop: 40,
        padding: 15
    },
    logo: {
        fontFamily: 'Poppins_900Black',
        fontSize: 25,
        fontWeight: '900',
        marginBottom: 10
    }
})

export default Header;