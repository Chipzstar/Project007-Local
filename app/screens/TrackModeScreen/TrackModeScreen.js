import React, {Component} from 'react';
import {View, Text } from 'react-native';
import {Body, Button, Content, Footer, Header, Left, Title} from "native-base";
import LinearGradient from "react-native-linear-gradient";
import {HideNavigationBar} from "react-native-navigation-bar-color";

//components
import OfflineStatus from '../../components/OfflineNotice';
import NavWheel from "../../components/NavWheel";
import AMIcon from '../../assets/icons/icon_font';

//styles
import styles from './styles';

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
                <OfflineStatus/>
                <Header transparent>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <AMIcon name={'back_arrow'} style={{color: 'white', aspectRatio: 0.5}}/>
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