import React, { Component } from 'react';
import { ActivityIndicator, StatusBar, View, StyleSheet } from 'react-native';
import * as firebase from 'react-native-firebase';

class Logout extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        firebase.auth().signOut().then(function () {
            console.log("User Logged out!")
        }).catch(function (error) {
            console.warn(error.message);
            console.log(error);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Logout;