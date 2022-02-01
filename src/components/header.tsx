import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SpaceMono_700Bold, useFonts } from "@expo-google-fonts/space-mono";
import AppLoading from "expo-app-loading";
import SearchInput from "./searchInput";
import { FontAwesome5 } from '@expo/vector-icons';

const Header: FC = () => {
    const [fontsLoaded] = useFonts({
        SpaceMono_700Bold
    });

    if (!fontsLoaded) {
        return <AppLoading />
    }

    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
                <FontAwesome5 style={styles.catIcon} name="cat" size={40}/>
                <View>
                    <Text style={styles.logo}>Animal</Text>
                    <Text style={styles.logo}>pediA</Text>
                </View>
            </View>
            
            <SearchInput />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginTop: 20,
        padding: 15
    },
    logo: {
        fontFamily: 'SpaceMono_700Bold',
        fontSize: 20,
        fontWeight: '700',
        marginBottom: -5
    },
    catIcon: {
        color: '#fbd52c',
        marginRight: 5
    }
})

export default Header;