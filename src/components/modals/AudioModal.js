import React, { Component } from 'react';
import { Modal, Text, View, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import EvilIconComponent from "react-native-vector-icons/EvilIcons";


class AudioModal extends Component {

    state = {
        audioObject : {
            title: "Sermon Title", 
            date: "05-05-2019"
        }
    }

    render() {
        return (
            <Modal animationType="slide" visible={this.props.modalVisible}>
                <SafeAreaView style={{flex: 1, backgroundColor: "#000"}}>
                    <View style={{ height: 95, width: "100%", alignItems: "center", backgroundColor: "#000", justifyContent: "space-between", flexDirection: "row"}}>
                        <View style={{ width: "20%"}}>
                            { this.state.audioObject ? <EvilIconComponent name="share-apple" size={30} style={{textAlign: "center", color: "#fff"}} /> : null }
                        </View>
                        <Text style={{ width: "60%", textAlign: "center", color: "#fff", fontSize: 16, fontWeight: "bold" }}>
                            {this.state.audioObject ? this.state.audioObject.title : "No Audio :("}
                        </Text>
                        <TouchableOpacity onPress={this.props.close} style={{ width: "20%" }}>
                            <EvilIconComponent name="chevron-down" size={30} style={{ textAlign: "center", color: "#fff"}} /> 
                        </TouchableOpacity>
                    </View>
                </SafeAreaView> 
            </Modal> 
        );
    }
}

export default AudioModal;
