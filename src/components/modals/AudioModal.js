import React, { Component } from 'react';
import { Modal, Text, View, TouchableOpacity, StatusBar, Image, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import FeatherIconComponent from "react-native-vector-icons/Feather";
import Slider from "@react-native-community/slider";
import Video from "react-native-video";

class AudioModal extends Component {

    state = {
        audioPaused: false,
        currentTime: 0,
        maxTime: 0
    }

    
    loadedAudio = (data) => {
        //Get minutes of max data
        this.setState({ maxTime: Math.floor(data.duration) })
    }

    setProgress = (data) => {
        this.setState({ currentTime: Math.floor(data.currentTime)});
    }

    sliderComplete = (time) => {
        time = Math.floor(time)
        this.refs.sermonElement.seek(time)
        this.setState({
            currentTime: time
        })
    }

    togglePlay = () => {
        this.setState({
            audioPaused: !this.state.audioPaused
        })
    }

    forwardFifteen = () => {
        this.setState({
            currentTime: Math.floor(this.state.currentTime) + 15
        })
    }

    backwardFifteen = () => {
        this.setState({
            currentTime: Math.floor(this.state.currentTime) - 15
        })
    }

    render() {
        
        const video = (
            <Video source={{uri: this.props.audioURL }} paused={this.state.audioPaused} onLoad={this.loadedAudio} onProgress={this.setProgress} ref="sermonElement" />
        )

        return (
            <Modal animationType="slide" visible={this.props.modalVisible}>
                <StatusBar backgroundColor="#000" barStyle="light-content"/>
                <SafeAreaView style={{flex: 1, backgroundColor: "#000", flexDirection: "column", justifyContent: "space-between", alignItems: "center"}}>

                
                    {/* Header */}
                    <View style={{ height: 60, width: "100%", alignItems: "center", backgroundColor: "#000", justifyContent: "space-between", flexDirection: "row"}}>
                        <View style={{ width: "20%"}}>
                        </View>
                        
                        <TouchableOpacity onPress={this.props.close} style={{ width: "20%" }}>
                            <FeatherIconComponent name="chevron-down" size={25} style={{ textAlign: "center", color: "#fff"}} /> 
                        </TouchableOpacity>
                    </View>
                    
                    {/* Album */}
                    <View style={{width: "100%", alignItems: "center", justifyContent: "flex-start"}}>
                        <Image style={{ height: (Dimensions.get('window').width * .8), width: (Dimensions.get('window').width * .8), borderRadius: 10 }} source={{uri: this.props.photoURL }} resizeMode="contain" />
                    </View>

                    {/* Controls and Info */}
                    <View style={{width: "100%", height: 200, flexDirection: "column", justifyContent: "flex-start", alignItems: "center"}}>
                        <Text style={{color: "#fff", textAlign: "center", fontSize: 18, fontWeight: "bold", marginBottom: 20}}> Sermon Title </Text>
                        <Slider
                            style={{width: "80%", height: 40, marginBottom: 10}}
                            minimumValue={0}
                            maximumValue={this.state.maxTime}
                            value={this.state.currentTime}
                            minimumTrackTintColor="#FFFFFF"
                            maximumTrackTintColor="#ffffff"
                            onSlidingComplete={this.sliderComplete}
                        />
                        <View style={{width: "70%", height: 50, flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                            <TouchableOpacity style={{paddingLeft: 20, paddingRight: 20}} onPress={this.togglePlay}>
                                { 
                                    this.state.audioPaused ? 
                                    <FeatherIconComponent name="play" size={25} style={{color: "#fff" }} /> :
                                    <FeatherIconComponent name="pause" size={25} style={{color: "#fff" }} />
                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                    {video}
                </SafeAreaView>  
            </Modal> 
        );
    }
}

export default AudioModal;
