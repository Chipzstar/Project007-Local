import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class HelpScreen extends Component {
    state = {};
    
    render() {
        return (
            <View style={styles.welcome}>
                <Text>Welcome to the HelpScreen Screen!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 24,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default HelpScreen;