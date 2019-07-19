import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
//import { withNavigation } from 'react-navigation';

export default class MenuItem extends Component {
	render() {
		return (
			<View style={styles.menuItem}>
				<TouchableOpacity onPress={this.props.onPress}>
					<Image source={this.props.itemImage} style={styles.image} />
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	menuItem: {
		width: '45%',
		height: '20%',
		padding: 10
	},
	image: {
		width: '100%',
		height: '100%',
		opacity: 0.8
	}
});

export { MenuItem };
