import {StyleSheet, Dimensions} from "react-native";

const {width: WIDTH} = Dimensions.get("window"); //Max Width of phone screen
const {height: HEIGHT} = Dimensions.get("window"); //Max Height of phone screen

export default (styles = StyleSheet.create({
    navWheelBackground: {
        opacity: 0.5
    },
    backgroundContainer: {
        flex: 1, //1:1 ratio
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
    contentContainer:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        /*borderWidth : 1,
        borderColor: 'red',*/
        marginBottom: HEIGHT * 0.05
    },
    carContainer: {
        flex: 0,
        flexGrow: 0.5,
        alignItems: 'center',
        justifyContent: 'flex-start'
        // paddingBottom: HEIGHT * 0.085,
        /*borderWidth : 1,
        borderColor: 'white'*/
    },
    addCarLogo: {
        aspectRatio: 2.5,
        resizeMode: 'contain'
    },
    addBtn: {
        aspectRatio: 0.5,
        resizeMode: 'contain'
    },
    text: {
        fontSize: 20
    },
    hamburger: {
        color: 'white',
        aspectRatio: 1.0
    },
    tileContainer: {
        flex: 3,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: HEIGHT * 0.015,
        /*borderWidth : 1,
        borderColor: 'white'*/
    },
    navIconContainer: {
        alignItems: 'center'
    },
    navIcon: {
        alignItems: 'center',
        resizeMode: 'contain',
        aspectRatio: 3.0
    }
}));
