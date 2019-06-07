import React from 'react';
import { TouchableOpacity, View} from 'react-native';
import FeatherIconComponent from "react-native-vector-icons/Feather";
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
                    <FeatherIconComponent name="mic" size={20} />
                </TouchableOpacity>
            </View>
        )
    }
}

export default NavbarAudioModalButton;