import React, { Component } from 'react';
import { Modal, Text, View, StatusBar, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import EvilIconComponent from "react-native-vector-icons/EvilIcons";


class AudioModal extends Component {
    render() {
        return (
            <Modal animationType="slide" visible={this.props.modalVisible}>
                <SafeAreaView style={{flex: 1, backgroundColor: "#000"}}>
                    <View style={{ height: 45, width: "100%", alignItems: "center", justifyContent: "space-between", flexDirection: "row"}}>
                        <View style={{ width: "20%"}}></View>
                        <Text style={{ width: "60%", textAlign: "center", color: "#fff", fontSize: 17, fontWeight: "bold"}}>Title</Text>
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
