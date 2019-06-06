
import React, { Component } from 'react';
import { createAppContainer, createBottomTabNavigator, createStackNavigator} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import HomeScreen from "./src/screens/HomeScreen";
import EventsScreen from "./src/screens/EventsScreen";
import InformationScreen from './src/screens/InformationScreen';


const App = createBottomTabNavigator(
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
          iconName = 'ios-apps';
        } else if (routeName === 'Events') {
          iconName = `ios-calendar`;
        } else if (routeName === "Information") {
          iconName = 'ios-information-circle-outline' 
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />; 
      }
    }),
    tabBarOptions: {
      activeTintColor: "#ffffff",
      inactiveTintColor: "#999999",
      style: {
        backgroundColor: "#01255D"
      }
    }
  }
)


export default createAppContainer(App);
