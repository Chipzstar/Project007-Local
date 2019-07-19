import {StyleSheet} from "react-native";

export default (styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        opacity: 0.8
    },
    menuContainer: {
    },
    drawerOptions: {
        color: 'white',
        fontWeight: 'normal',
        fontFamily: 'OPTIMA',
        textTransform: 'uppercase'
    },
    ER_option: {
        color: 'red',
        fontWeight: 'normal',
        fontFamily: 'Sans-serif',
        textTransform: 'uppercase',
        textAlign: 'right'
    },
    closeBtn: {
        marginVertical: 20,
        marginHorizontal: 10
    }
}));