import { FC } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons"

const SearchInput: FC = () => {
    return (
        <View style={styles.container}>
            <AntDesign style={styles.searchIcon} name="search1"/>
            <TextInput style={styles.input} placeholder="Поиск по Animal pedia" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#d1f1db',
        borderRadius: 5,
        paddingVertical: 3,
        paddingHorizontal: 5
    },
    searchIcon: {
        fontSize: 20,
        color: '#f3c8df',
        marginRight: 5
    },
    input: {
        fontSize: 16,
        color: '#f3c8df'
    }
})

export default SearchInput;