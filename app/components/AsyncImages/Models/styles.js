import { StyleSheet, Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window'); //Max Width of phone screen
const { height: HEIGHT } = Dimensions.get('window'); //Max Height of phone screen

export default (styles = StyleSheet.create({
    menuItem: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center'
        //alignItems: 'center'
        //alignItems: 'center',
        /*borderWidth: 2,
        borderColor: 'red',*/
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
        resizeMode: 'cover'
        /*borderWidth: 1,
        borderColor: 'white'*/
    },
    loading: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));
