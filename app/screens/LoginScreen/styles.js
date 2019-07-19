import { StyleSheet, Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window'); //Max Width of phone screen
const { height: HEIGHT } = Dimensions.get('window'); //Max Height of phone screen

export default (styles = StyleSheet.create({
	backgroundContainer: {
		flex: 1, //1:1 ratio
		width: '100%',
		height: '100%'
	},
	contentContainer:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	backArrow: {
		color: 'white',
		aspectRatio: 0.5
	},
	headerText: {
		color: '#ffffff',
		fontSize: 30,
		fontWeight: '500',
		marginBottom: 20,
		opacity: 0.5
	},
	inputContainer: {
		marginTop: 10
	},
	input: {
		width: WIDTH - 55,
		height: 45,
		fontSize: 16,
		paddingLeft: 45,
		backgroundColor: 'rgba(0, 0, 0, 0.35)',
		color: 'rgba(255, 255, 255, 0.7)',
		marginHorizontal: 25
	},
	inputIcon: {
		position: 'absolute',
		top: 8,
		left: 37
	},
	btnEye: {
		position: 'absolute',
		top: 8,
		right: 37
	},
	submitBtn: {
		width: WIDTH - 55,
		height: 45,
		backgroundColor: '#A42323',
		justifyContent: 'center',
		marginTop: 20
	},
	text: {
		color: 'rgba(255, 255, 255, 0.7)',
		fontSize: 18,
		textAlign: 'center'
	},
	optionBtn: {
		padding: 10
	},
	optionText: {
		fontWeight: 'bold',
		fontSize: 20,
		color: 'rgba(255, 255, 255, 0.7)'
	}
}));
