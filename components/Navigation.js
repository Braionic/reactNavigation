import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { View, Text, Image, Button, useColorScheme, Pressable, StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Messages from "../screens/Messages";
import Home from "../screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Notifications from "../screens/Notifications";
import Settings from "../screens/Settings";
import Details from "../screens/Details";
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import About from "./DrawerScreen/About";
import { Avatar } from "react-native-elements";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const TopBar = createMaterialTopTabNavigator();
export default function Navigation() {

const myTheme = useColorScheme()

    function ImageComponent(){
        return (
            <Pressable><Image source={{uri: 'https://th.bing.com/th/id/R.2bee11a830bacc5ae9006df56b20c33a?rik=nXUBy4boCTrW8w&pid=ImgRaw&r=0'}} width={40} height={40} borderRadius={5} /></Pressable>
        )
    }
 
    function TopBarbar(){
        return (
            <TopBar.Navigator>
                <TopBar.Screen name='Main' component={Home} />
                <TopBar.Screen name='Settings' component={Settings} />
            </TopBar.Navigator>
        )
    }
    function DrawerStack(){
        return(
            <Drawer.Navigator>
                <Drawer.Screen name='Bottomstack' options={{drawerLabel: 'Home', title: 'Menu', headerShown: false}} component={Bottomstack} />
                <Drawer.Screen name='About' component={About} options={{headerShown: true}} />
            </Drawer.Navigator>
        )
    }
  function HomeStackGroup() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={TopBarbar} />
        <HomeStack.Screen name="Details" component={Details} options={{headerBackTitle: 'GoBack', headerTintColor: 'red'}} />
      </HomeStack.Navigator>
    );
  }
  function Bottomstack() {
    return (
      <Tab.Navigator
        screenOptions={({ route, navigation }) => ({
          tabBarIcon: ({ color, size, focused }) => {
            let iconName;

            if (route.name === "HomeStackGroup") {
              iconName = focused ? "ios-home-sharp" : "md-home-outline";
            } else if (route.name === "Messages") {
              iconName = focused
                ? "chatbox-ellipses"
                : "chatbox-ellipses-outline";
            } else if (route.name === "Notifications") {
              iconName = focused
                ? "notifications-sharp"
                : "notifications-outline";
            } else if (route.name === "Settings") {
              iconName = focused
                ? "ios-settings-sharp"
                : "ios-settings-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "green",
          tabBarActiveBackgroundColor: "yellow",
          headerRight: ()=> <Button title="Hello" onPress={()=> navigation.toggleDrawer()} />,
          headerLeft: ()=> <Pressable onPress={()=>{navigation.openDrawer()}}><Avatar rounded square source={{uri: 'https://i.ibb.co/tDVz3VP/2021-12-19-17-22-IMG-3911.jpg'}}/></Pressable>
        })}
      >
        <Tab.Screen
          name="HomeStackGroup"
          component={HomeStackGroup}
          options={{ tabBarLabel: "Home", headerTitle: (props)=> <ImageComponent {...props} /> }}
        />
        <Tab.Screen name="Messages" component={Messages} />
        <Tab.Screen name="Notifications" component={Notifications} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer theme={myTheme ==='dark'? DarkTheme: DefaultTheme}>
      <DrawerStack />
    </NavigationContainer>
  );
}

  /* function Topstack(){
        return (
            <Stack.Navigator initialRouteName='home'>
            <Stack.Screen  name='home' 
            options={{title: 'Home Page', headerStyle: {backgroundColor: 'green'}, headerTitleStyle: {color: 'white'}, headerTitle: ()=> <Image style={{width: 40, height: 40}} source={{uri: 'https://i.ibb.co/ZBf4tLY/549-5498506-happy-person-png-transparent-images-happy-black-woman.png'}} />, headerLeft: ()=> (<Button title='Profile' color='white' />), headerRight: ()=> <Button title='Go' color='white' onPress={()=>alert('u pressed me')} /> }}
             component={Home} />
            <Stack.Screen name='messages' component={Messages} />
        </Stack.Navigator>
        )
    } */
