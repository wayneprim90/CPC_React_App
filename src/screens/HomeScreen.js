import React, { Component } from 'react';
import { Text, SafeAreaView, StatusBar} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import {createStackNavigator} from 'react-navigation';
import NavbarNotificationButton from '../components/NavbarNotificationButton';

class HomeScreen extends Component{
    static navigaotionOptions = ({navigation}) => {
        return {
            headerRight: (
                <NavbarNotificationButton />
            )
        }
    } 

    componentDidMount() {
        this.props.navigation.setParams({ navButtonClickHandler : this._navButtonClickHandler })
    }

    _navButtonClickHandler = () => { 
        alert("Clicked");
    }

    render() {
        return (
        <SafeAreaView style={{
            flex: 1, 
            alignItems: "center",
            justifyContent: "center"
        }}>
            <StatusBar backgroundColor="#eee" barStyle="dark-content"></StatusBar>
            <Text>Home Screen</Text>
        </SafeAreaView>
        )
    }
}

  
const HomeStack = createStackNavigator(
    {
        Home: HomeScreen
    },
    {
        defaultNavigationOptions: {

        }
    }
)


export default HomeStack;