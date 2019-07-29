import React, {Component} from 'react';
import {View, ActivityIndicator, TouchableOpacity, Image} from 'react-native';
import * as firebase from "react-native-firebase";
import img from "../../../assets/images/drawable-xxxhdpi/vantage.png";
import styles from "./Stylesheets/bigTile";

export default class BigTrackTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            mounted: true,
            url: "",
        }
    }
    
    componentDidMount() {
        this.setState({isMounted: true});
        this.getFileRef();
    }
    
    async getFileRef() {
        if (this.state.mounted) {
            const query = await firebase.firestore().collection('app_tiles').doc('track_mode');
            query.get().then((doc) => {
                if (doc.exists) {
                    let path = doc.data()[this.props.image];
                    console.log(`Storage Location: ${path}`);
                    this.getAndLoadFirebaseUrl(path);
                }
            }).catch((error) => console.log(error));
        }
    }
    
    async getAndLoadFirebaseUrl(path) {
        const ref = await firebase.storage().refFromURL(path);
        console.log(ref);
        ref.getDownloadURL().then(url => {
            this.setState({url: url});
            this.setState({loading: false});
            console.log(`URL: ${url}`);
        }).catch((error) => {
            this.setState({url: img});
            this.setState({loading: false});
            console.log(error);
        })
    };

//The code that is called when the component is about to unmount. Use it to cancel any http calls otherwise you will get a memory warning from React
    componentWillUnmount() {
        this.setState({isMounted: false});
    }

//The code that is called when the props passed to the component change. It is typically useful when say you are implementing a search functionality and you need to refresh the image after the component is refreshed on the component.
    componentWillReceiveProps(nextProps, nextContent) {
        if (nextProps.refresh) {
            //Write whatever code you want here.
        }
    }
    
    render() {
        if (this.state.mounted) {
            if (this.state.loading) {
                return (
                    <View style={styles.loading}>
                        <ActivityIndicator/>
                    </View>
                )
            } else {
                return (
                    <View style={styles.menuItem}>
                        <TouchableOpacity onPress={this.props.onPress}>
                            <Image source={{uri : this.state.url}} style={styles.image}/>
                        </TouchableOpacity>
                    </View>
                )
            }
        }  else {
            return null;
        }
    }
}

export { BigTrackTile };