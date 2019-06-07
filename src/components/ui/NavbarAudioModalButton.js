import React from 'react';
import { TouchableOpacity, View} from 'react-native';
import IoniconComponent from "react-native-vector-icons/Ionicons";
import AudioModal from '../modals/AudioModal';

class NavbarAudioModalButton extends React.Component {
    state = {
        modalVisible: false
    }

    toggleAudioModal = () => {
        this.setState({
            modalVisible: !this.state.modalVisible
        })
    }

    render() {
        return (
            <View>
                <AudioModal close={this.toggleAudioModal} modalVisible={this.state.modalVisible} />
                <TouchableOpacity style={{paddingLeft: 20, paddingRight: 20}} onPress={this.toggleAudioModal}>
                    <IoniconComponent name="ios-mic" size={25} />
                </TouchableOpacity>
            </View>
        )
    }
}

export default NavbarAudioModalButton;