import { FC } from "react";
import { StyleProp, TextInput, TextStyle } from "react-native";

interface Props {
    placeholder: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
    placeholderTextColor?: string;
    style?: StyleProp<TextStyle> | undefined;
}

const Input: FC<Props> = ({placeholder, onChangeText, secureTextEntry, placeholderTextColor, style}) => {
    return (
        <TextInput 
            placeholder={placeholder} 
            secureTextEntry={secureTextEntry || false} 
            onChangeText={onChangeText} 
            placeholderTextColor={placeholderTextColor}
            style={style}
        />
    );
};

export default Input;