import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class SettingScreen extends Component {
    state = {};
    
    render() {
        return (
            <View style={styles.welcome}>
                <Text>Welcome to the SettingsScreen Screen!</Text>
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

export default SettingScreen;