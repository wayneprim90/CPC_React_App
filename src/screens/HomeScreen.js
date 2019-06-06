import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, StatusBar} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import {createStackNavigator} from 'react-navigation';

class HomeScreen extends Component {
    static navigationOptions = {
        title : "Feed",
        headerRight: (
            <TouchableOpacity onPress={() => alert('This is a button!')}>
                <Ionicons style={{paddingLeft: 20, paddingRight: 20 }} name="ios-notifications-outline" size={25} />
            </TouchableOpacity>
        )
        
    }
    render() {
        return (
        <View style={{
            flex: 1, 
            alignItems: "center",
            justifyContent: "center"
        }}>
            <StatusBar backgroundColor="#eee" barStyle="dark-content"></StatusBar>
            <Text>Home Screen</Text>
        </View>
        )
    }
}

  
const HomeStack = createStackNavigator(
    {
        Home: HomeScreen
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                // elevation: Platform.OS == "android" ? 0 : "default"
            }
        }
    }
)


export default HomeStack;