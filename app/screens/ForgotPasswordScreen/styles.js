import { StyleSheet, Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window'); //Max Width of phone screen
const { height: HEIGHT } = Dimensions.get('window'); //Max Height of phone screen

export default (styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    contentContainer:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    backArrow: {
        color: 'white',
        aspectRatio: 0.5
    },
    headerContainer: {
        marginTop: 40,
        padding: 20
    },
    headerText: {
        color: '#ffffff',
        fontSize: 30,
        fontWeight: '500',
        marginBottom: 20,
        opacity: 0.5,
        alignSelf: 'center'
    },
    contentText: {
        color: '#ffffff',
        fontSize: 20,
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
    text: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 18,
        textAlign: 'center'
    },
    submitBtn: {
        width: WIDTH - 55,
        height: 45,
        backgroundColor: '#A42323',
        justifyContent: 'center',
        marginTop: 20
    },
}));
