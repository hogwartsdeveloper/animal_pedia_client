import { FC } from "react";
import { TextInput } from "react-native";

interface Props {
    placeholder: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
    placeholderTextColor?: string;
}

const Input: FC<Props> = ({placeholder, onChangeText, secureTextEntry, placeholderTextColor}) => {
    return (
        <TextInput placeholder={placeholder} secureTextEntry={secureTextEntry || false} onChangeText={onChangeText} placeholderTextColor={placeholderTextColor}/>
    );
};

export default Input;