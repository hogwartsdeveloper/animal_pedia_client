import { FC, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons"
import Input from "./UI/input";

const SearchInput: FC = () => {
    const [search, setSearch] = useState<string>('')

    return (
        <View style={styles.container}>
            <AntDesign style={styles.searchIcon} name="search1"/>
            <Input placeholder="Поиск по Animal pedia" onChangeText={(text) => setSearch(text)} placeholderTextColor='#fbd52c'/>
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