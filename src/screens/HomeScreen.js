import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, StatusBar} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import {createStackNavigator} from 'react-navigation';

class HomeScreen extends Component {

    state = {
        counter : 0
    }

    static navigationOptions = ({navigation}) => {
        return {
            headerRight: (
                <TouchableOpacity onPress={navigation.getParam('incrementCount')}>
                    <Ionicons style={{paddingLeft: 20, paddingRight: 20 }} name="ios-notifications-outline" size={25} />
                </TouchableOpacity> 
            )
        }
        
    }

    componentDidMount() {
        this.props.navigation.setParams({ incrementCount : this._incrementCount }) 
    }
    
    _incrementCount = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
        <View style={{
            flex: 1, 
            alignItems: "center",
            justifyContent: "center"
        }}>
            <StatusBar backgroundColor="#eee" barStyle="dark-content"></StatusBar>
<<<<<<< HEAD
            <Text>Count: {this.state.counter}</Text>
=======
            <Text>Home Screen</Text>
>>>>>>> e2eec9700d45d1f7d159ed26e32fd53273481732
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