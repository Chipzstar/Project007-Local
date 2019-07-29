import React, {Component} from "react";
import {ImageBackground, Image, View, TouchableOpacity} from "react-native";
import {DrawerActions, withNavigation} from "react-navigation";
import {Header, Left, Right, Button, Body, Content, Footer} from 'native-base';
import {HideNavigationBar} from 'react-native-navigation-bar-color';
// import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

//images and icons
import bgImage from "../../assets/images/drawable-xxxhdpi/home-background.png";
import headerTitle from "../../assets/images/drawable-xxxhdpi/am.png";
import addBtn from '../../assets/images/drawable-xxxhdpi/add_button.png';
import addCarLogo from '../../assets/images/drawable-xxxhdpi/add_car.png';
import AMIcon from '../../assets/icons/icon_font';

//Stylesheets
import styles from "./styles";

//components
import HomeTile from "../../components/AsyncImages/Home/HomeTile";
import NavWheel from '../../components/NavWheel';
import OfflineStatus from '../../components/OfflineNotice';
import navWheelBackground from "../../assets/images/drawable-xxxhdpi/oval.png";

//Homepage for registered users
class HomeScreen extends Component {
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
        currentUser: null
    };
    
    /*toggleIcon = () => {
        if (this.state.press === true) {
            this.setState({
                showHamburger: true,
                press: false
            });
        } else {
            this.setState({
                showHamburger: false,
                press: true
            });
        }
    };*/
    
    /*showNavWheel = () => {
        if (this.state.press === true) {
            this.setState({
                showNavWheel: true,
                press: false
            });
        } else {
            this.setState({
                showNavWheel: false,
                press: true
            });
        }
    };*/
    
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <OfflineStatus/>
                <Header transparent>
                    <Left style={{flex: 1}}>
                        <Button transparent onPress={() => {
                            this.props.navigation.dispatch(DrawerActions.openDrawer());
                        }}>
                            <AMIcon name={'burger'} style={styles.hamburger}/>
                        </Button>
                    </Left>
                    <Body style={{flex: 1}}>
                        <Image source={headerTitle} resizeMode="contain" style={styles.header}/>
                    </Body>
                    <Right style={{flex: 1}}>
                        <Button transparent onPress={() => navigate('Account')}>
                            <FontAwesome name={'user'} size={20} color={'white'}/>
                        </Button>
                    </Right>
                </Header>
                <Content contentContainerStyle={styles.contentContainer}>
                    <View style={styles.carContainer}>
                        <Image
                            source={addCarLogo}
                            style={styles.addCarLogo}
                        />
                        <TouchableOpacity onPress={() => navigate('AddCar')}>
                            <Image source={addBtn} style={styles.addBtn}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.tileContainer}>
                        <HomeTile image={'models'} onPress={() => navigate('Models')}/>
                        <HomeTile image={'track'} onPress={() => navigate('Track')}/>
                        <HomeTile image={'q'} onPress={() => navigate('Q')}/>
                        <HomeTile image={'live'} onPress={() => navigate('Live')}/>
                    </View>
                </Content>
                <NavWheel/>
                <Footer style={{backgroundColor: 'transparent'}}>

                </Footer>
            </ImageBackground>
        );
    }
}

export default withNavigation(HomeScreen);
