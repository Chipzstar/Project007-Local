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
    },
    back: {
        color: 'white',
        aspectRatio: 0.5
    },
    contentContainer: {
        flex: 1,
        marginBottom: HEIGHT * 0.05
    },
    carContainer: {
        flex: 1,
        //flexGrow: 0.75,
        alignItems: 'center',
        justifyContent: 'flex-start',
        /*borderWidth: 1,
        borderColor: 'blue'*/
    },
    addCarLogo: {
        aspectRatio: 2.5,
        resizeMode: 'contain'
    },
    formContainer: {
        flex: 2.5,
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        /*borderWidth: 1,
        borderColor: 'red'*/
    },
    inputContainer: {
        width: '80%',
        paddingVertical: HEIGHT * 0.05
    },
    linksContainer:{
        width: '30%',
        height: '10%',
        /*borderWidth: 1,
        borderColor: 'green'*/
    },
    enterVIN: {
        aspectRatio: 1.75
    },
    forgotVIN: {
        width: '100%',
        height: '100%'
    },
    submit: {
        height: '20%',
        borderWidth: 1,
        padding: 20
    },
    submitText: {
        color: 'white',
        lineHeight: 20,
        //TODO
    }
}));
