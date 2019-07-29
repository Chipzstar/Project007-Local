import { StyleSheet, Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window'); //Max Width of phone screen
const { height: HEIGHT } = Dimensions.get('window'); //Max Height of phone screen

export default (styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    header: {
        height: '100%',
        width: '100%',
        aspectRatio: 4.0,
        alignSelf: 'center'
        // left: WIDTH * 0.05
    },
    back: {
        color: 'white',
        aspectRatio: 0.5
    }
}));
