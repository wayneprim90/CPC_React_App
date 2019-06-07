import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import NavbarAudioModalButton from '../components/ui/NavbarAudioModalButton';


class EventsScreen extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerRight: (
                <NavbarAudioModalButton />
            )
        }
    }

    render() {
        return (
        <View style={{
            flex: 1, 
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Text>Events Screen</Text>
        </View>
        )
    }
}


const EventsStack = createStackNavigator(
    {
        Events: EventsScreen
    }
)

export default EventsStack;