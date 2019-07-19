import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from "react-native-linear-gradient";

class AddCarScreen extends Component {
    state = {};
    
    render() {
        return (
            <LinearGradient colors={['#0c0a0f', '#3b5998', '#135675']} style={styles.background}>
                <View style={styles.welcome}>
                    <Text style={styles.text}>Welcome to the AddCarScreen Screen!</Text>
                </View>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    welcome: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    }
    
});

export default AddCarScreen;