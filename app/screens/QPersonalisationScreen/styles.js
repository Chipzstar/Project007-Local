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
        alignItems: 'center',
        marginBottom: HEIGHT * 0.05,
        /*borderWidth: 1,
        borderColor: 'red'*/
    },
    header: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
        // left: WIDTH * 0.05
    },
    backArrow: {
        aspectRatio: 0.5,
        color: 'white'
    },
    imageContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end'
        /*borderWidth: 1,
        borderColor: 'red'*/
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    }
}));

