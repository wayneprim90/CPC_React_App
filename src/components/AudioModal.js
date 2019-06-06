import React, { Component } from 'react';
import { Modal, Text, View, Button, SafeAreaView } from 'react-native';

class AudioModal extends Component {
    render() {
        return (
            <SafeAreaView>
                <Modal visible={this.props.v}>
                    <View style={{padding: 20}}>
                        <Text style={{marginBottom: 25}}> Welcome to the Audio Modal Updated</Text>
                        <Button  
                            title="Close" 
                            onPress={this.props.close} />
                    </View>
                </Modal>
            </SafeAreaView>
        );
    }
}

export default AudioModal;
