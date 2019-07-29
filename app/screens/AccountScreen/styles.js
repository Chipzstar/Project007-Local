import { StyleSheet, Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window'); //Max Width of phone screen
const { height: HEIGHT } = Dimensions.get('window'); //Max Height of phone screen

export default (styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profileContainer: {
        marginBottom: 50,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#ccc',
        flexDirection: 'row',
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: 'black',
        marginHorizontal: 20,
    },
    profileTitle: {
        fontFamily: 'Sans-serif',
        color: 'black',
        fontSize: 24,
    },
    profileSubtitle: {
        fontFamily: 'Sans-serif',
        color: '#999',
        fontSize: 14,
    },
}));
