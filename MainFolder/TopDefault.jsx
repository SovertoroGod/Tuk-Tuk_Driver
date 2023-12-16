import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';




import { FontAwesome } from '@expo/vector-icons';



import {
    
    useSafeAreaInsets,
  } from 'react-native-safe-area-context';
export const MainHeader = ({title}) => {

    const insets = useSafeAreaInsets();
    return (
        <View style={[styles.container, {marginTop: insets.top}]}>
            <TouchableOpacity>
                <FontAwesome name="user-circle" size={26} color="white" onPress={() => {}}/>
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity>
                <FontAwesome name="bars" size={26} color="white" onPress={() => {}} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems:"center",
            height: 80,
            paddingHorizontal: 30,
            backgroundColor: "#F46200"
        },
        title: {
            fontSize : 20,
            fontWeight : "bold",
            color: "white",
            fontStyle: "italic",
        },
    }
)


