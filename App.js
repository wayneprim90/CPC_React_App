
import React, { Component } from 'react';
import { createAppContainer, createBottomTabNavigator, createStackNavigator} from "react-navigation";
import FeatherIconComponent from "react-native-vector-icons/Feather";

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
        let iconName;

        if (routeName === 'Home') { 
          iconName = 'home';
        } else if (routeName === 'Events') {
          iconName = `calendar`;
        } else if (routeName === "Information") {
          iconName = 'info' 
        }

        // You can return any component that you like here!
        return <FeatherIconComponent name={iconName} size={20} color={tintColor} />; 
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
