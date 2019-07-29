import React, {Component} from 'react';
import {Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Left, Button, Header, Content, Body, Footer, Right } from 'native-base';
import {withNavigation} from "react-navigation";
import {HideNavigationBar} from "react-native-navigation-bar-color";
import * as firebase from 'react-native-firebase';
//images & icons
import AMIcon from '../../assets/icons/icon_font';
import headerTitle from '../../assets/images/drawable-xxxhdpi/models_header.png';

//components
import ModelsTile from "../../components/AsyncImages/Models/ModelsTile";
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
                    <Left style={{flex: 1}}>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <AMIcon name={'back_arrow'} style={{aspectRatio: 0.5, color: 'white'}}/>
                        </Button>
                    </Left>
                    <Body style={{flex: 1}}>
                        <Image source={headerTitle} resizeMode="contain" style={styles.header}/>
                    </Body>
                    <Right style={{flex: 1}}>
                    
                    </Right>
                </Header>
                <Content contentContainerStyle={styles.contentContainer}>
                    <ModelsTile image={'vantage'}/>
                    <ModelsTile image={'db_11'}/>
                    <ModelsTile image={'dbs'}/>
                </Content>
                <NavWheel/>
                <Footer style={{backgroundColor: 'transparent'}}>
                </Footer>
            </LinearGradient>
        )
    }
}

export default withNavigation(ModelsScreen);