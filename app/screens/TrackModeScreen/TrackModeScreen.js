import React, {Component} from 'react';
import {View, Text } from 'react-native';
import {Body, Button, Content, Footer, Header, Icon, Left, Title} from "native-base";
import NavWheel from "../../components/NavWheel";
import LinearGradient from "react-native-linear-gradient";
import styles from './styles';
import {HideNavigationBar} from "react-native-navigation-bar-color";

class TrackModeScreen extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        HideNavigationBar();
    }
    
    state = {};
    
    render() {
        return (
            <LinearGradient colors={['#192f6a', '#135675', '#3b5998']} style={styles.backgroundContainer}>
                <Header transparent>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name={'arrow-back'}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>AMR TRACK MODE</Title>
                    </Body>
                </Header>
                <Content contentContainerStyle={styles.contentContainer}>
                    <View style={styles.welcome}>
                        <Text style={styles.text}>Welcome to the TrackModeScreen Screen!</Text>
                    </View>
                </Content>
                <NavWheel/>
                <Footer style={{backgroundColor: 'transparent'}}>
                </Footer>
            </LinearGradient>
        )
    }
}

export default TrackModeScreen;