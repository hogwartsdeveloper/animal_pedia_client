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



const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 25,
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
                            size={30}
                            style={{
                                color: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text style={{
                            color: focused ? '#e32f45' : '#748c94',
                            fontSize: 12
                        }}>Лента</Text>
                    </View>
                )
            }}/>
            

            <Tab.Screen name="Save" component={Login} options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.tab}>
                        <Entypo 
                            name="bookmark" 
                            size={30}
                            style={{
                                color: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text style={{
                            color: focused ? '#e32f45' : '#748c94',
                            fontSize: 12
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
                                color: '#e32f45'
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
                            size={30}
                            style={{
                                color: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text style={{
                            color: focused ? '#e32f45' : '#748c94',
                            fontSize: 12
                        }}>История</Text>
                    </View>
                )
            }}/>
            <Tab.Screen name="Cabinet" component={SignUp} options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.tab}>
                        <AntDesign 
                            name="user" 
                            size={30}
                            style={{
                                color: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text style={{
                            color: focused ? '#e32f45' : '#748c94',
                            fontSize: 12
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