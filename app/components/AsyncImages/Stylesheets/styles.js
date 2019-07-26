import { StyleSheet } from "react-native";

// const {width: WIDTH} = Dimensions.get("window"); //Max Width of phone screen
// const {height: HEIGHT} = Dimensions.get("window"); //Max Height of phone screen

export default (styles = StyleSheet.create({
    menuItem: {
        width: '50%',
        height: '50%',
        alignItems: 'center',
        /*borderWidth: 2,
        borderColor: 'red',*/
    },
    image: {
        width: '100%',
        height: '100%',
        aspectRatio: 0.9
    },
    loading: {
        width: '50%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));
