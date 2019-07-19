import React, { Component } from "react";
import {
	ActivityIndicator,
	StatusBar,
	StyleSheet,
	View
} from "react-native";
import * as firebase from 'react-native-firebase';

class AuthLoadingScreen extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		/* 	Firebase listener for when a user either signs in or signs out.
			   Runs continuously/asynchronously in the background of the app  */
		firebase.auth().onAuthStateChanged((user) => {
			// screen will be unmounted and thrown away.
			// This will switch to the App screen or Auth screen and this loading
			console.log(`User: ${user}`);
			this.props.navigation.navigate(user && user.emailVerified ? 'App' : 'Auth');
			if(user) {
				console.log(`Email verified: ${user.emailVerified}`);
			}
		});
	}
	
	logout = async () => {
		await firebase.auth().signOut().then(function () {
			console.log("User Logged out!")
		}).catch(function (error) {
			console.log(error.message);
		});
	};

	// Render any loading content that you like here
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
		alignItems: "center",
		justifyContent: "center"
	}
});

export default AuthLoadingScreen;
