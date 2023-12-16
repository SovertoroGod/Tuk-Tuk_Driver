
import { Platform, StyleSheet, Text, View} from 'react-native';
import Home from '../MainFolder/Home';
import Ongoing from '../MainFolder/Ongoing';
import Compass from '../MainFolder/Compass';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo,Ionicons,FontAwesome5 } from '@expo/vector-icons';




const Tab = createBottomTabNavigator();
const screenOptions = {
  initialRouteName : "Home",
  tabBarShowLabel : false,
  headerShown : false,
  tabBarStyle : {
    position : "absolute",
    bottom :0 ,
    left : 0,
    right : 0,
    elevation : 0,
    height : 80,
    
    backgroundColor : "#F0C09D",
    borderTopWidth : 3,
    borderColor:"#F0C09D",
    borderTopLeftRadius : 5,
    borderTopRightRadius : 5,
   
    
  },
  tabBarActiveTintColor: '#F46200',
  tabBarInactiveTintColor: '#EE8438',
 
  
}

export  function MainIndex(){
    return(
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen 
            name="Home" component={Home} 
            options={{
              
              tabBarIcon : ({focused, color})=> {
                return(
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Entypo name="home" size={ focused? 30 : 24} color={color} />
                    <Text style={ focused?{fontSize:15, color: "#F46200", fontWeight: 600 }: {color: "#F0C09D"}} >Home</Text>
                </View>
                )
                
              }
            }}  />
            
          <Tab.Screen 
          name="Compass" component={Compass}
          options={{
            tabBarIcon : ({focused})=> {
              return(
                <View
                  style={focused?
                  {
                    top: Platform.OS== "android" ? -20 : -30,
                    width: Platform.OS== "android"? 90:100,
                    height: Platform.OS== "android"? 90:100 ,
                    borderRadius: Platform.OS== "android"? 43:48,
                    backgroundColor: "#F46200",
                    justifyContent: "center",
                    alignItems: "center",
                    }:
                    {
                      borderWidth:1,
                      borderColor: "#F46200",
                      backgroundColor:"#fff",
                      top: Platform.OS== "android" ? -20 : -30,
                      width: Platform.OS== "android"? 90:100,
                      height: Platform.OS== "android"? 90:100,
                      borderRadius: Platform.OS== "android"? 43:48,
                      justifyContent: "center",
                      alignItems: "center",
                      position : 'float',
                      
                    }
                    
                } 
                >
                    <Ionicons name="ios-compass-sharp" size={60} color={focused? "#fff" : "#F46200"} />
                  
                </View>
              )
              
            }
          }} />
          <Tab.Screen 
          name="Ongoing" component={Ongoing}
          options={{
            tabBarIcon : ({focused, color})=> {
              return(
                <View style={{alignItems:"center", justifyContent:"center"}}>
                  <FontAwesome5 name="users" size={focused? 30 : 24} color={color}/>
                  <Text style={focused?{fontSize:15, color: "#F46200", fontWeight: 600 }: {color: "#F0C09D"}}>Ongoing Trip</Text>
              </View>
              )
              
            }
          }} />

        </Tab.Navigator>
    );
}