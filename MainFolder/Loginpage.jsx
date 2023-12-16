import { View, Text, TouchableOpacity, Image,TextInput,StyleSheet } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';

const logo = require("../assets/images/tuktuk.png");

export default function Loginpage() {
    const navigation = useNavigation();
  return (
    <View style={tw`flex-1 bg-orange-400`}>
        <SafeAreaView style={tw`flex bg-orange-400`}>
        
            <View style={tw`flex-row justify-start`}>
                <TouchableOpacity style={tw`bg-orange-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4 mt-2`} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back-circle-sharp" size={30} color="white" />
                </TouchableOpacity>
            
            </View>
            <View style={tw`flex-1 justify-center items-center`}>
                <Image source={logo} style={{width:100,height:100}}/>
                <Text style={tw`text-white font-bold text-4xl tracking-wide leading-normal`}>Tuk-Tuk </Text>
            </View>
           
        
        </SafeAreaView>
        <View style={tw`flex-1 px-8 pt-8 mt-30 bg-white rounded-t-10`}>
            <View style={styles.css1}>
                <Text style={tw`text-orange-700 ml-4 mb-3 text-lg`}>User Name</Text>
                <TextInput style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-5 text-lg`} placeholder="Enter Your Phone number" />
                <Text style={tw`text-orange-700 ml-4 mb-3 text-lg`}>Password</Text>
                <TextInput style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-5 text-lg`} placeholder="Enter Your Password" secureTextEntry/>
                
                <TouchableOpacity style={tw`py-4 rounded-full bg-orange-400 my-8`} onPress={() =>navigation.navigate("Secondview")}>
                    <Text style={tw` font-bold text-center text-white text-base`}>Login to Your Account</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    </View>
  )
}

const styles = StyleSheet.create(
    {
        css1: {
            marginTop: 8,
        }
    }
)