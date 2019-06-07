import React, { Component } from 'react';
import { Modal, Text, View, TouchableOpacity, StatusBar, Image, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import FeatherIconComponent from "react-native-vector-icons/Feather";
import Slider from "@react-native-community/slider";

class AudioModal extends Component {

    state = {
        audioObject : {
            title: "The Model Prayer", 
            date: "05-05-2019"
        },
        playing: false,
        timer: {
            current: 20
        }
    }

    playToggle = () => {
        this.setState({
            playing: !this.state.playing
        })
    }

    backwardFifteen = () => {
        this.setState({
            timer: {
                current: this.state.timer.current - 15
            }
        })
    }

    forwardFifteen = () => {
        this.setState({
            timer: {
                current: this.state.timer.current + 15
            }
        })
    }

    sliderStarted = () => {
        alert("Slider Started")
    }


    render() {
        return (
            <Modal animationType="slide" visible={this.props.modalVisible}>
                <StatusBar backgroundColor="#000" barStyle="light-content"/>
                <SafeAreaView style={{flex: 1, backgroundColor: "#000", flexDirection: "column", justifyContent: "space-between", alignItems: "center"}}>

                    {/* Header */}
                    <View style={{ height: 60, width: "100%", alignItems: "center", backgroundColor: "#000", justifyContent: "space-between", flexDirection: "row"}}>
                        <View style={{ width: "20%"}}>
                            { this.state.audioObject ? <FeatherIconComponent name="share" size={25} style={{textAlign: "center", color: "#fff"}} /> : null }
                        </View>
                        
                        <TouchableOpacity onPress={this.props.close} style={{ width: "20%" }}>
                            <FeatherIconComponent name="chevron-down" size={25} style={{ textAlign: "center", color: "#fff"}} /> 
                        </TouchableOpacity>
                    </View>
                    
                    {/* Album */}
                    <View style={{width: "100%", alignItems: "center", justifyContent: "flex-start"}}>
                        <Image style={{ height: (Dimensions.get('window').width * .8), borderRadius: 10 }} source={require("../../assets/images/album-image.png")} resizeMode="contain" />
                    </View>

                    {/* Controls and Info */}
                    <View style={{width: "100%", height: 200, flexDirection: "column", justifyContent: "flex-start", alignItems: "center"}}>
                        <Text style={{color: "#fff", textAlign: "center", fontSize: 18, fontWeight: "bold", marginBottom: 20}}> { this.state.audioObject.title }</Text>
                        <Slider
                            style={{width: "80%", height: 40, marginBottom: 10}}
                            minimumValue={0}
                            maximumValue={100}
                            value={this.state.timer.current}
                            minimumTrackTintColor="#FFFFFF"
                            maximumTrackTintColor="#ffffff"
                            onSlidingStart={this.sliderStarted}
                        />
                        <View style={{width: "70%", height: 50, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                            <TouchableOpacity style={{paddingLeft: 20, paddingRight: 20}} onPress={this.backwardFifteen}>
                                <FeatherIconComponent name="skip-back" size={25} style={{color: "#fff" }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingLeft: 20, paddingRight: 20}} onPress={this.playToggle}>
                                { 
                                    !this.state.playing ? 
                                    <FeatherIconComponent name="play" size={25} style={{color: "#fff" }} /> :
                                    <FeatherIconComponent name="pause" size={25} style={{color: "#fff" }} />
                                }
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingLeft: 20, paddingRight: 20}} onPress={this.forwardFifteen}>
                                <FeatherIconComponent name="skip-forward" size={25} style={{color: "#fff" }} />
                            </TouchableOpacity>
                        </View>
                    </View>

                </SafeAreaView>  
            </Modal> 
        );
    }
}

export default AudioModal;
