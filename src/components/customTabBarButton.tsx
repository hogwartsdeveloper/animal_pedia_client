import { FC, ReactChild } from "react"
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
    children: React.ReactNode;
    onPress?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | GestureResponderEvent) => void;
}


const CustomTabBarButton: FC<Props> = ({children, onPress}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                top: -30,
                justifyContent: 'center',
                alignItems: 'center',
                ...styles.shadow
            }}
        >
            <View style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                
            }}>
                {children}
            </View>
        </TouchableOpacity>
    )
}


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

export default CustomTabBarButton;