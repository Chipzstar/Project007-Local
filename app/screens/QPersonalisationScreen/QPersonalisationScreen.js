import React, {Component} from 'react';
import {View, Text } from 'react-native';
import {Container, Body, Button, Content, Footer, Header, Icon, Left, Title} from "native-base";
import NavWheel from "../../components/NavWheel";
import styles from './styles';
import {HideNavigationBar} from "react-native-navigation-bar-color";
import AMIcon from "../../assets/icons/icon_font";

class QPersonalisationScreen extends Component {
    constructor(props) {
        super(props);
        
    }
    
    componentDidMount() {
        HideNavigationBar();
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        HideNavigationBar();
    }
    
    state = {};
    
    render() {
        return (
            <Container style={styles.container}>
                <Header transparent>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <AMIcon name={'back_arrow'} style={styles.backArrow}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Q BY ASTON MARTIN</Title>
                    </Body>
                </Header>
                <Content contentContainerStyle={styles.contentContainer}>
                    <View style={styles.welcome}>
                        <Text style={styles.text}>Welcome to the QPersonalisation Screen!</Text>
                    </View>
                </Content>
                <NavWheel/>
                <Footer style={{backgroundColor: 'transparent'}}>
                </Footer>
            </Container>
        )
    }
}

export default QPersonalisationScreen;