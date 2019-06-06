import React, { Component } from 'react';
import { View, Text, Platform} from 'react-native';
import {createStackNavigator} from 'react-navigation';

class InformationScreen extends Component {
    static navigationOptions = {
        title : "Information"
    }
    render() {
        return (
        <View style={{
            flex: 1, 
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Text>InfoScreen</Text>
        </View>
        )
    }
}


const InformationStack = createStackNavigator(
    {
        Information: InformationScreen
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                // elevation: Platform.OS == "android" ? 0 : "default"
            }
        }
    }
)


export default InformationStack;