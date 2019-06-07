import React, { Component } from 'react';
import { View, FlatList, Text, StatusBar, SafeAreaView, TouchableOpacity} from 'react-native';
import AudioModal from "../components/modals/AudioModal";
import FeatherIconComponent from "react-native-vector-icons/Feather";
import { createStackNavigator } from 'react-navigation';

class HomeScreen extends Component{

    constructor(props) {
        super(props);
        this.state = {
            modalVisible : false,
            sermons : [
                {
                    key: "2123123",
                    title: "First Sermon",
                    audioURL: "http://static1.squarespace.com/static/58ac3d315016e1b8ebf53b98/t/5c98e26f652deafd31f3bbb2/1554306701537/NO+FEAR.mp3/original/NO+FEAR.mp3", 
                    photoURL: "https://image.freepik.com/free-vector/gradient-abstract-square-background_1164-1644.jpg"
                },
                {
                    key: "12312312lk3j12;3k1",
                    title: "Second Sermon",
                    audioURL: "http://static1.squarespace.com/static/58ac3d315016e1b8ebf53b98/t/5c98e26f652deafd31f3bbb2/1554306701537/NO+FEAR.mp3/original/NO+FEAR.mp3",
                    photoURL: "https://cdn.pixabay.com/photo/2017/09/26/22/23/pixel-2790335_960_720.png"
                }
            ]
        }
    }

    showAudioModal = (audioURL, photoURL) => {
        this.setState({
            modalVisible: true,
            audioURL: audioURL,
            photoURL: photoURL
        })
    }

    closeAudioModal = () => {
        this.setState({
            modalVisible: false
        })
    }

    render() {
        let audioURL = "http://static1.squarespace.com/static/58ac3d315016e1b8ebf53b98/t/5c98e26f652deafd31f3bbb2/1554306701537/NO+FEAR.mp3/original/NO+FEAR.mp3";
        
        return (
            <SafeAreaView style={{padding: 15}}>
                <AudioModal close={this.closeAudioModal} audioURL={this.state.audioURL} photoURL={this.state.photoURL} modalVisible={this.state.modalVisible} />
                <StatusBar backgroundColor="#eee" barStyle="dark-content"></StatusBar>
                
                <View>
                    <FlatList data={this.state.sermons} renderItem={({item}) => 
                        <View style={{padding: 20, backgroundColor: "#eee", marginBottom: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}> 
                            <View>
                                <Text> {item.title} </Text>
                            </View>
                            <TouchableOpacity onPress={this.showAudioModal.bind(this, item.audioURL, item.photoURL)}>
                                <FeatherIconComponent name="play-circle" size={25} />
                            </TouchableOpacity>
                        </View>
                    } />
                </View>
            </SafeAreaView> 
        )
    }
}

const HomeStack = createStackNavigator({
    Home : HomeScreen
})

export default HomeStack;