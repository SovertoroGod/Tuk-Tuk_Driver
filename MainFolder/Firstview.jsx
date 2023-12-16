import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';


const img1 = require("../assets/images/Hanlin-City.jpg");
const img2 = require("../assets/images/tuktuk.png");

export default function Firstview() {
    const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex:1}}>
      <ImageBackground source={img1} style={{flex:1}} >
      <View style={tw`flex-1 flex bg-black opacity-70`}>
                <View style={tw`flex items-center my-10 text-center z-40`}>
                    <Image source={img2} style={{width: 130, height: 130}} />
                    <Text style={tw`text-orange-400 font-bold text-4xl tracking-wide leading-normal`}>Tuk-Tuk </Text>  
                    <Text style={tw`text-orange-400 text-base font-normal tracking-wide`}>(Travel Service in Pyay)</Text>      
                    <View style={tw`my-30`}>
                      <Text style={tw`text-orange-400 text-base font-normal tracking-wide text-center`}>Always ready to make your travel easy</Text>
                  </View>
                  <View style={{zindex:0}}>
                    <TouchableOpacity style={tw`bg-orange-500 bg-opacity-100 mx-7 my-10 w-50 rounded-xl py-3 max-w-sm text-center font-bold`} onPress = {() => navigation.navigate('Login')}>
                    <Text style={styles.fontCss}>Let's Get Started</Text></TouchableOpacity>
                  </View>
                </View>
            </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create(
    { 
         fontCss : {
           
            fontSize: 20,
            fontWeight: 'thin',
            textAlign : 'center',
        
            color: 'white'
        },
    }
)


