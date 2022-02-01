import { FC, useState } from "react";
import { Image, View, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import Input from "../components/UI/input";

const Login: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return (
        <View style={{backgroundColor: '#fff', height: '100%'}}>
            <Image source={require('../../assets/image/animal.jpg')} style={{width: '100%', height: '30%'}}/>
            <Text
                style={{
                    fontSize: 30,
                    alignSelf: 'center',
                    marginTop: 10
                }}
            >Save the world</Text>

            <Text
                style={{
                    marginHorizontal: 50,
                    textAlign: 'center',
                    marginTop: 5,
                    opacity: 0.4
                }}
            >
                Amet minim molit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit molit.
            </Text>

            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginHorizontal: 55,
                    borderWidth: 2,
                    marginTop: 10,
                    paddingHorizontal: 10,
                    borderColor: '#fbd52c',
                    borderRadius: 23,
                    paddingVertical: 2
                }}
            >
                <AntDesign name="mail" size={24} color="#fbd52c" />
                <Input 
                    placeholder="Введите email" 
                    onChangeText={(text) => setEmail(text)} 
                    style={{paddingHorizontal: 10}}
                />
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginHorizontal: 55,
                    borderWidth: 2,
                    marginTop: 15,
                    paddingHorizontal: 10,
                    borderColor: '#fbd52c',
                    borderRadius: 23,
                    paddingVertical: 2
                }}
            >
                <AntDesign name="lock1" size={24} color="#fbd52c" />
                <Input 
                    placeholder="Введите пароль" 
                    onChangeText={(text) => setEmail(text)} 
                    style={{paddingHorizontal: 10}}
                />
            </View>

            <View
                style={{
                    marginHorizontal: 55,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 20,
                    backgroundColor: '#fbd52c',
                    paddingVertical: 8,
                    borderRadius: 23
                }}
            >
                <Text style={{
                    color: '#000'
                }}>Войти</Text>
            </View>
            <Text style={{
                alignSelf: 'center',
                color: '#fbd52c',
                paddingVertical: 10
            }}>New User</Text>
        </View>
    );
};

export default Login;