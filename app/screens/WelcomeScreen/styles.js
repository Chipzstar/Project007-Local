import { StyleSheet, Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window'); //Max Width of phone screen
const { height: HEIGHT } = Dimensions.get('window'); //Max Height of phone screen

export default (styles = StyleSheet.create({
	backgroundContainer: {
		flex: 1, //1:1 ratio
		width: '100%',
		height: '100%',
		alignItems: 'center'
	},
	logoContainer: {
		flex: 1,
		height: 30,
		width: WIDTH,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	logo: {
		flex: 2,
		aspectRatio: 1.0
	},
	welcome: {
		flex: 3,
		aspectRatio: 1.0,
		bottom: 80
	},
	menuContainer: {
		flex: 1,
		width: WIDTH,
		flexDirection: 'row',
		justifyContent: 'space-around',
		bottom: 150
	}
}));
