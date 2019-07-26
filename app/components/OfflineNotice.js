import React, {PureComponent} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import NetInfo, {useNetInfo} from "@react-native-community/netinfo";

const {width} = Dimensions.get('window');

const MiniOfflineSign = () => {
    const netInfo = useNetInfo();
    if (!netInfo.isConnected) {
        return (
            <View style={styles.offlineContainer}>
                <Text style={styles.offlineText}>No Internet Connection</Text>
            </View>
        );
    } else {
        return null;
    }
};

class OfflineNotice extends PureComponent {
    state = {
        isConnected: false
    };
    
    componentDidMount() {
        /*NetInfo Listener to monitor whether the user is connected to the Internet and whether they lose connection at any point*/
        // Subscribe
        NetInfo.addEventListener(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
            this.setState({isConnected: state.isConnected})
        });
    };
    
    render() {
        return <MiniOfflineSign/>;
    }
}

const styles = StyleSheet.create({
    offlineContainer: {
        backgroundColor: '#b52424',
        height: 30,
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row',
        width,
        position: 'absolute',
        // marginTop: 30
    },
    offlineText: {
        color: '#fff'
    }
});
export default OfflineNotice;