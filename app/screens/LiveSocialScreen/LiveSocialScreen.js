import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class LiveSocialScreen extends Component {
    state = {};
    
    render() {
        return (
            <View style={styles.welcome}>
                <Text style={styles.text}>Welcome to the LiveSocialScreen Screen!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    welcome: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default LiveSocialScreen;