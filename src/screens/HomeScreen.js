import React, { Component } from 'react';
import { Text, StatusBar, SafeAreaView} from 'react-native';
import {createStackNavigator } from 'react-navigation';
import NavbarAudioModalButton from '../components/ui/NavbarAudioModalButton';

class HomeScreen extends Component{

    state = {
        modalVisible : false
    }

    static navigationOptions = ({navigation}) => {
        return {
            headerRight: (
                <NavbarAudioModalButton /> 
            )
        }
    } 

    render() {
        return (
            <SafeAreaView style={{ flex: 1, alignItems: "center",justifyContent: "center" }}>
                <StatusBar backgroundColor="#eee" barStyle="dark-content"></StatusBar>
                <Text>Home Screen</Text>
            </SafeAreaView>
        )
    }
}

  
const HomeStack = createStackNavigator(
    {
        Home: HomeScreen
    }
)


export default HomeStack;