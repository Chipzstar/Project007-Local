import React, {Component} from "react";
import AppContainer from "./app/router/router";
import {StatusBar} from "react-native";
// import * as firebase from "react-native-firebase";
// import NavWheel from './app/components/NavWheel';

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        /*firebase.auth().signOut().then(function () {
            console.log("User Logged out!")
        }).catch(function (error) {
            console.log(error.message);
        });*/
        StatusBar.setHidden(true);
    }
    
    render() {
        return <AppContainer/>;
    }
}
