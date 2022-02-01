import { FC } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons"

const SearchInput: FC = () => {
    return (
        <View style={styles.container}>
            <AntDesign style={styles.searchIcon} name="search1"/>
            <TextInput style={styles.input} placeholder="Поиск по Animal pedia" placeholderTextColor='#fbd52c'/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#000',
        borderRadius: 5,
        paddingVertical: 3,
        paddingHorizontal: 5
    },
    searchIcon: {
        fontSize: 20,
        color: '#fbd52c',
        marginRight: 5
    },
    input: {
        fontSize: 16
    }
})

export default SearchInput;