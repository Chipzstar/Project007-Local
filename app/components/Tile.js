import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

export default class Tile extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={styles.menuItem}>
                <TouchableOpacity onPress={this.props.onPress}>
                    <Image source={this.props.itemImage} style={styles.image} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    menuItem: {
        width: '50%',
        height: '50%',
        padding: 10
    },
    image: {
        width: '100%',
        height: '100%',
        aspectRatio: 0.9
    }
});

export { Tile };
