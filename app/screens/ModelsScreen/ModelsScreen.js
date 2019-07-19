import React, {Component} from 'react';
import {View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Left, Button, Header, Content, Body, Title, Footer } from 'native-base';
import {withNavigation} from "react-navigation";
import {HideNavigationBar} from "react-native-navigation-bar-color";
import * as firebase from 'react-native-firebase';
//icons
import AMIcon from '../../assets/icons/icon_font';

//components
import NavWheel from '../../components/NavWheel';
//styles
import styles from './styles';

class ModelsScreen extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        HideNavigationBar();
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        HideNavigationBar();
    }
    state = {
        currentUser: firebase.auth().currentUser
    };
    
    render() {
        return (
            <LinearGradient colors={['#0c0a0f', '#192f6a', '#135675', '#3b5998']} style={styles.backgroundContainer}>
                <Header transparent>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <AMIcon name={'back_arrow'} style={{aspectRatio: 0.5, color: 'white'}}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Models</Title>
                    </Body>
                </Header>
                <Content contentContainerStyle={styles.contentContainer}>
                    <View style={styles.welcome}>
                        <Text style={styles.text}>Welcome to the ModelsScreen Screen!</Text>
                    </View>
                </Content>
                <NavWheel/>
                <Footer style={{backgroundColor: 'transparent'}}>
                </Footer>
            </LinearGradient>
        )
    }
}

export default withNavigation(ModelsScreen);