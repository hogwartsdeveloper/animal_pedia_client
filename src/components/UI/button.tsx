import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
    buttonText: string;
    onPress: () => void;
}

const Button: FC<Props> = ({buttonText, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text>{buttonText}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        backgroundColor: '#fbd52c',
        paddingVertical: 8,
        marginHorizontal: 55,
        borderRadius: 23
    }
})

export default Button;