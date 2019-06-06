
import React, { Component } from 'react';
import { createAppContainer, createBottomTabNavigator, createStackNavigator} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import HomeScreen from "./src/screens/HomeScreen";
import EventsScreen from "./src/screens/EventsScreen";
import InformationScreen from './src/screens/InformationScreen';


const MainAppNavigator = createBottomTabNavigator(
  { 
    Home: HomeScreen,
    Events: EventsScreen, 
    Information: InformationScreen
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor, horizontal}) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') { 
          iconName = 'ios-home';
        } else if (routeName === 'Events') {
          iconName = `ios-calendar`;
        } else if (routeName === "Information") {
          iconName = 'ios-options'
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />; 
      }
    }),
    tabBarOptions: {
      inactiveBackgroundColor: "#01255D",
      activeBackgroundColor: "#01255D",
      activeTintColor: "#2DC7E5",
      inactiveTintColor: "#eef0f0"
    }
  }
)


export default createAppContainer(MainAppNavigator);
