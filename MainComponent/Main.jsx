import { View, Text } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Firstview from '../MainFolder/Firstview';
import Loginpage from '../MainFolder/Loginpage';


const Stack = createNativeStackNavigator();
export default function Main() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Firstview'>
            <Stack.Screen name = 'Firstview' options={{headerShown: false}} component={Firstview}/>
            <Stack.Screen name = 'Login' options={{headerShown: false}} component={Loginpage}/>
            <Stack.Screen name = 'Secondview' options={{headerShown: false}} component={Firstview}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}