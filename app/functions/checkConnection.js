/*
import React from 'react';
import { Alert} from 'react-native';
import NetInfo from "@react-native-community/netinfo";

state = {};
const checkConnection = async () =>  {
        let state = await NetInfo.fetch();
        if (!state.isConnected) {
            this.setState({isConnected: false});
            Alert.alert(
                'No Internet Connection',
                'Please connect to the Internet to Sign Up!',
                [
                    {
                        text: 'Ok',
                        onPress: () => console.log('Ok pressed')
                    }
                ],
                {cancelable: true}
            );
        } else {
            console.log("You are currently connected! Signing in....");
        }
        this.setState({isConnected: state.isConnected});
        console.log(`Connected? ${state.isConnected}`);
    };

export default checkConnection;*/
