import { StyleSheet, Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window'); //Max Width of phone screen
const { height: HEIGHT } = Dimensions.get('window'); //Max Height of phone screen

export default (styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: HEIGHT * 0.25,
        marginBottom: HEIGHT * 0.05,
        /*borderWidth: 1,
        borderColor: 'red'*/
    },
    header: {
        height: '100%',
        width: '100%',
        aspectRatio: 4.0,
        alignItems: 'center'
        // left: WIDTH * 0.05
    }
}));

