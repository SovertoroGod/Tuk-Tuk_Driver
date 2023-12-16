import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import Firstview from './MainFolder/Firstview';
import { NavigationContainer } from '@react-navigation/native';
import tw from 'twrnc';
import Main from './MainComponent/Main';

export default function App() {
  return (
    <View style={{flex:1}}>
     <Main />
      
      
    </View>
  );
}


