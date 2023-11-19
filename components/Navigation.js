import {NavigationContainer} from '@react-navigation/native'
import { View, Text, Image, Button } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Messages from '../screens/Messages'
import Home from '../screens/Home'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Notifications from '../screens/Notifications'
import Settings from '../screens/Settings'
import Profile from '../screens/Profile'

const Tab = createBottomTabNavigator()
export default function Navigation() {
    const Stack = createNativeStackNavigator()
    function Topstack(){
        return (
            <Stack.Navigator initialRouteName='home'>
            <Stack.Screen  name='home' 
            options={{title: 'Home Page', headerStyle: {backgroundColor: 'green'}, headerTitleStyle: {color: 'white'}, headerTitle: ()=> <Image style={{width: 40, height: 40}} source={{uri: 'https://i.ibb.co/ZBf4tLY/549-5498506-happy-person-png-transparent-images-happy-black-woman.png'}} />, headerLeft: ()=> (<Button title='Profile' color='white' />), headerRight: ()=> <Button title='Go' color='white' onPress={()=>alert('u pressed me')} /> }}
             component={Home} />
            <Stack.Screen name='messages' component={Messages} />
        </Stack.Navigator>
        )
    }
    function Bottomstack(){
        return(
            <Tab.Navigator screenOptions={({route, navigation})=>({tabBarIcon: ({color, size, focused})=>{
                let iconName;

                if (route.name === "Home") {
                  iconName = focused
                    ? "ios-home-sharp"
                    : "md-home-outline";
                } else if (route.name === 'Messages') {
                  iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline';
                } else if(route.name === 'Notifications'){
                    iconName = focused? 'notifications-sharp' : 'notifications-outline'
                } else if(route.name === 'Settings'){
                    iconName = focused? 'ios-settings-sharp': 'ios-settings-outline'
                }
             return <Ionicons name={iconName} size={size} color={color} />
    },
    tabBarActiveTintColor: 'red',
    tabBarInactiveTintColor: 'green',
    tabBarActiveBackgroundColor: 'yellow'})}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name='Messages' component={Messages} />
                <Tab.Screen name='Notifications' component={Notifications} />
                <Tab.Screen name='Settings' component={Settings} />
            </Tab.Navigator>
        )
    }

  return (
    <NavigationContainer>
        <Bottomstack />
    </NavigationContainer>
  )
}