import React, {Component} from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity, View } from 'react-native';
import AudioModal from './AudioModal';

class NavbarNotificationButton extends Component{
    state = {
        modalVisible : false
    }


    toggleModal = () => {
        this.setState({
            modalVisible: !this.state.modalVisible
        })
    }

    render() {
        return(
            <View>
                <AudioModal close={this.toggleModal} v={this.state.modalVisible} />
                <TouchableOpacity onPress={this.toggleModal}>
                    <Ionicons style={{paddingLeft: 20, paddingRight: 20}} name="ios-notifications-outline" size={25} />
                </TouchableOpacity>
            </View>
        )
    }
}

export default NavbarNotificationButton;
