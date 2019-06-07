import React, { Component } from 'react';
import { Text, StatusBar, SafeAreaView} from 'react-native';
import {createStackNavigator } from 'react-navigation';
import NavbarNotificationButton from '../components/NavbarNotificationButton';
import AudioModal from "../components/AudioModal";

class HomeScreen extends Component{

    state = {
        modalVisible: false
    }

    static navigationOptions = ({navigation}) => {
        return {
            headerRight: (
                <NavbarNotificationButton click={navigation.getParam("navButtonClickHandler")}/>
            )
        }
    } 

    componentDidMount() {
        this.props.navigation.setParams({ navButtonClickHandler : this._navButtonClickHandler })
    }

    _navButtonClickHandler = () => { 
        this.toggleModal()
    }

    toggleModal = () => {
        this.setState({
            modalVisible: !this.state.modalVisible
        })
    }

    render() {
        return (
        <SafeAreaView style={{ flex: 1, alignItems: "center",justifyContent: "center" }}>
            <AudioModal close={this.toggleModal} modalVisible={this.state.modalVisible} />
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