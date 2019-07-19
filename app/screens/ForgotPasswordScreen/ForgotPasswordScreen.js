import React, {Component} from 'react';
import {ImageBackground, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Header, Body, Content, Left, Button} from "native-base";
import bgImage from "../../assets/images/drawable-xxxhdpi/welcome-background.png";
import {ShowNavigationBar} from 'react-native-navigation-bar-color';
import * as firebase from "react-native-firebase";
import OfflineNotice from "../../components/OfflineNotice";
//Icons
import Icon from "react-native-vector-icons/Ionicons";
import AMIcon from '../../assets/icons/icon_font';

//stylesheets
import styles from './styles';
import NetInfo from "@react-native-community/netinfo";

class ForgotPasswordScreen extends Component {
    constructor(props) {
        super(props);
    }
    
    state = {
        email: ""
    };
    
    componentDidMount() {
        ShowNavigationBar();
    }
    
    static navigationOptions = {
        header: null
    };
    
    updateValue(text) {
        this.setState({
            email: text
        });
    }
    
    validateEmail = () => {
        if (this.state.email == null || this.state.email === "") {
            alert("You must enter an email address!");
            return false;
        }
        return true;
    };
    
    submit() {
        let data = {};
        data.email = this.state.email;
        
        function checkConnection() {
            let isConnected = true;
            NetInfo.fetch().then(state => {
                if(!state.isConnected){
                    alert('Please connect to the Internet to Sign Up!');
                    isConnected = false;
                }
            });
            console.log('You are connected!');
            return isConnected;
        }
        
        // Password Reset API
        if (checkConnection() && this.validateEmail()) {
            firebase.auth().sendPasswordResetEmail(this.state.email.trim()).then(() => {
                alert('Password Reset Email sent successfully! Please check your inbox');
                this.props.navigation.navigate('SignedOut');
            }).catch((error) => {
                //Error handling if for invalid inputs
                alert(error.message);
                console.log(error);
            });
        }
    }
    
    render() {
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <OfflineNotice/>
                <Header transparent>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <AMIcon name={'back_arrow'} style={styles.backArrow}/>
                            <Text style={{
                                color: 'white',
                                fontSize: 17,
                                marginHorizontal: 10
                            }}>Back</Text>
                        </Button>
                    </Left>
                    <Body>
                    
                    </Body>
                </Header>
                <Content contentContainerStyle={styles.contentContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}> Forgot Password </Text>
                        <Text style={styles.contentText}> Please enter the email address of your
                            account</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name={'md-mail'} size={28} color={'rgba(255, 255, 255, 0.7)'}
                              style={styles.inputIcon}/>
                        <TextInput
                            style={styles.input}
                            placeholder={"Email Address"}
                            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                            underlineColorAndroid="transparent"
                            onChangeText={(email) => this.updateValue(email)}
                            value={this.state.email}
                        />
                    </View>
                    <TouchableOpacity style={styles.submitBtn} onPress={() => this.submit()}>
                        <Text style={styles.text}>Submit</Text>
                    </TouchableOpacity>
                </Content>
            </ImageBackground>
        )
    }
}

export default ForgotPasswordScreen;