import { FC, useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Input from "./UI/input";
import { IInput } from "../types/types";


interface Props {
    welcomeText: string;
    welcomeDescription: string;
    inputs: IInput[];
    buttonText: string;
    onPress?: () => void;
}

const LoginForm: FC<Props> = ({welcomeText, welcomeDescription, inputs, buttonText, onPress}) => {
    return (
        <View style={styles.container}>
            <Image 
                source={require('../../assets/image/animal.jpg')} 
                style={styles.image}
            />
            <Text style={styles.welcome}>
                {welcomeText}
            </Text>
            <Text style={styles.description}>
                {welcomeDescription}
            </Text>

            {inputs.map(input => (
                <View style={styles.inputDiv} key={input.id}>
                    <AntDesign name={input.icon} size={24} color="#fbd52c" />
                    <Input 
                        placeholder={input.placeholder}
                        onChangeText={input.onChangeText}
                        style={{paddingHorizontal: 10}}
                    /> 
                </View>
            ))}
            
            <View style={styles.button}>
                <Text onPress={onPress}>{buttonText}</Text>
            </View>

            <Text style={{
                    alignSelf: 'center',
                    color: '#fbd52c',
                    paddingVertical: 10
                }}>New User</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%'
    },
    image: {
        width: '100%',
        height: '30%'
    },
    welcome: {
        alignSelf: 'center',
        fontSize: 25,
        marginTop: 10
    },
    description: {
        textAlign: 'center',
        marginTop: 5,
        opacity: 0.4
    },
    inputDiv: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 55,
        borderWidth: 2,
        marginTop: 10,
        paddingHorizontal: 10,
        borderColor: '#fbd52c',
        borderRadius: 23,
        paddingVertical: 2
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: '#fbd52c',
        paddingVertical: 8,
        borderRadius: 23,
        marginHorizontal: 55,
    }
})

export default LoginForm;