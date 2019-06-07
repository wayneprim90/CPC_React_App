import React, {Component} from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from 'react-native';

class NavbarNotificationButton extends Component{
    render() {
        return(
            <TouchableOpacity onPress={this.props.click}>
                <Ionicons style={{paddingLeft: 20, paddingRight: 20}} name="ios-notifications-outline" size={25} />
            </TouchableOpacity>
        )
    }
}

export default NavbarNotificationButton;
