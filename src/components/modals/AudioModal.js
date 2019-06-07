import React, { Component } from 'react';
import { Modal, Text, View, TouchableOpacity, StatusBar, Image, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import FeatherIconComponent from "react-native-vector-icons/Feather";


class AudioModal extends Component {

    state = {
        audioObject : {
            title: "The Model Prayer", 
            date: "05-05-2019"
        }
    }

    render() {
        return (
            <Modal animationType="slide" visible={this.props.modalVisible}>
                <StatusBar backgroundColor="#000" barStyle="light-content"/>
                <SafeAreaView style={{flex: 1, backgroundColor: "#000", flexDirection: "column", justifyContent: "space-between", alignItems: "center"}}>

                    {/* Header */}
                    <View style={{ height: 60, width: "100%", alignItems: "center", backgroundColor: "#222", justifyContent: "space-between", flexDirection: "row"}}>
                        <View style={{ width: "20%"}}>
                            { this.state.audioObject ? <FeatherIconComponent name="share" size={25} style={{textAlign: "center", color: "#fff"}} /> : null }
                        </View>
                        
                        <TouchableOpacity onPress={this.props.close} style={{ width: "20%" }}>
                            <FeatherIconComponent name="chevron-down" size={25} style={{ textAlign: "center", color: "#fff"}} /> 
                        </TouchableOpacity>
                    </View>
                    
                    <View style={{width: "100%", alignItems: "center", justifyContent: "flex-start", backgroundColor: "blue"}}>
                        <Image style={{ height: (Dimensions.get('window').width * .8), borderRadius: 10 }} source={require("../../assets/images/album-image.png")} resizeMode="contain" />
                    </View>

                    <View style={{backgroundColor: "blue", width: "100%", height: 200}}></View>

                </SafeAreaView>  
            </Modal> 
        );
    }
}

export default AudioModal;
