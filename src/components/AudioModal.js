import React, { Component } from 'react';
import { Modal, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-navigation';

class AudioModal extends Component {
    render() {
        return (
            <Modal visible={this.props.modalVisible}>
                <SafeAreaView style={{padding: 20}}>
                    <Text style={{marginBottom: 25}}> Welcome to the Audio Modal Updated</Text>
                    <Button  
                        title="Close" 
                        onPress={this.props.close} />
                </SafeAreaView>
            </Modal>
        );
    }
}

export default AudioModal;
