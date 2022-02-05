import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Login from "../screens/login";
import Ribbon from "../screens/ribbon";
import SignUp from "../screens/signUp";
import { Ionicons, Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { FC } from "react";
import Post from "../screens/post";
import CustomTabBarButton from "../components/customTabBarButton";


const Tab = createBottomTabNavigator();



const Tabs: FC = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 10,
                    left: 20,
                    right: 20,
                    backgroundColor: '#fff',
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow
                }
            }}
        >
            <Tab.Screen name="Ribbon" component={Ribbon} options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.tab}>
                        <Ionicons 
                            name="planet-outline" 
                            size={25}
                            style={{
                                color: focused ? '#fbd52c' : '#000'
                            }}
                        />
                        <Text style={{
                            color: focused ? '#fbd52c' : '#000',
                            fontSize: 11
                        }}>Лента</Text>
                    </View>
                )
            }}/>
            

            <Tab.Screen name="Save" component={Post} options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.tab}>
                        <Entypo 
                            name="bookmark" 
                            size={25}
                            style={{
                                color: focused ? '#fbd52c' : '#000'
                            }}
                        />
                        <Text style={{
                            color: focused ? '#fbd52c' : '#000',
                            fontSize: 11
                        }}>Сохранено</Text>
                    </View>
                )
            }}/>

            <Tab.Screen name="Post" component={Post} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <Ionicons 
                            name="add-circle" 
                            size={70}
                            style={{
                                color: '#fbd52c'
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton children={props.children} onPress={props.onPress}/>
                    )
                }}
            />
            <Tab.Screen name="History" component={SignUp} options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.tab}>
                        <MaterialCommunityIcons 
                            name="history" 
                            size={25}
                            style={{
                                color: focused ? '#fbd52c' : '#000'
                            }}
                        />
                        <Text style={{
                            color: focused ? '#fbd52c' : '#000',
                            fontSize: 11
                        }}>История</Text>
                    </View>
                )
            }}/>
            <Tab.Screen name="Cabinet" component={Login} options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.tab}>
                        <AntDesign 
                            name="user" 
                            size={25}
                            style={{
                                color: focused ? '#fbd52c' : '#000'
                            }}
                        />
                        <Text style={{
                            color: focused ? '#fbd52c' : '#000',
                            fontSize: 11
                        }}>Кабинет</Text>
                    </View>
                )
            }}/>
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    tab: {
        alignItems: 'center',
        justifyContent: 'center',
        top: 5
    }
})

export default Tabs;