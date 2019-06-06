import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {createStackNavigator} from 'react-navigation';


class EventsScreen extends Component {
    static navigationOptions = {
        title: "Events"
    }
    render() {
        return (
        <View style={{
            flex: 1, 
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Text>Hey</Text>
        </View>
        )
    }
}


const EventsStack = createStackNavigator(
    {
        Events: EventsScreen
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                // elevation: Platform.OS == "android" ? 0 : "default"
            }
        }
    }
)

export default EventsStack;