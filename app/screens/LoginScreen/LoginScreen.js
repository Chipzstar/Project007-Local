import React, {Component} from 'react';
import {View, TouchableOpacity, ImageBackground, Text, TextInput, Alert, ToastAndroid} from 'react-native';
import {Header, Body, Content, Left, Button} from "native-base";
import * as firebase from 'react-native-firebase';
import {ShowNavigationBar} from "react-native-navigation-bar-color";
import OfflineNotice from "../../components/OfflineNotice";
import NetInfo from "@react-native-community/netinfo";

//images & icons
import bgImage from '../../../app/assets/images/drawable-xxxhdpi/welcome-background.png';
import Icon from 'react-native-vector-icons/Ionicons';
import AMIcon from '../../assets/icons/icon_font';

//styles
import styles from './styles';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showPassword: true,
            press: false,
            isConnected: false,
        };
    }
    
    componentDidMount() {
        ShowNavigationBar();
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        ShowNavigationBar();
    }
    
    static navigationOptions = {
        header: null,
        title: 'Login'
    };
    
    updateValue(text, field) {
        if (field === 'email') {
            this.setState({
                email: text
            });
        } else if (field === 'password') {
            this.setState({
                password: text
            });
        }
    }
    
    showPassword = () => {
        if (this.state.press === false) {
            this.setState({
                showPassword: false,
                press: true
            });
        } else {
            this.setState({
                showPassword: true,
                press: false
            });
        }
    };
    
    /**
     * Checks User is connected to the Internet
     */
    checkConnection = async () => {
        let state = await NetInfo.fetch();
        if (!state.isConnected) {
            this.setState({isConnected: false});
            ToastAndroid.showWithGravity(
                'No Internet Connection',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM
            );
        } else {
            console.log("You are currently connected! Signing in....");
        }
        this.setState({isConnected: state.isConnected});
        console.log(`Connected? ${state.isConnected}`);
        return state;
    };
    
    validateEntry() {
        if (this.state.email == null || this.state.email === "") {
            ToastAndroid.show("Email address field cannot be empty!", 3);
            return false;
        } else if (this.state.password == null || this.state.password === "") {
            ToastAndroid.show("Password field cannot be empty!", 3);
            return false;
        }
        return true;
    }
    
    submit = () => {
        /**
         * Sends a new verification email link to the give user's email
         * Simple info message box displayed when email has been sent
         */
        function verifyEmail() {
            let user = firebase.auth().currentUser;
            user.sendEmailVerification()
                .then((result) => {
                    alert("A verification link has been sent to your email");
                    console.log(result);
                }).catch((error) => {
                console.log(error.message);
            });
        }
        
        function checkEmailVerified(props) {
            let user = firebase.auth().currentUser;
            if (!user.emailVerified) {
                Alert.alert(
                    'Email not verified!.',
                    'Please check your inbox and verify the email',
                    [
                        {
                            text: 'Send new verification link', onPress: () => {
                                verifyEmail();
                                props.navigation.navigate('SignOut')
                            }
                        },
                        {
                            text: 'OK', onPress: () => {
                                console.log('OK Pressed...');
                                props.navigation.navigate('SignOut');
                            }
                        }
                    ],
                    {cancelable: false}
                );
            } else {
                console.log('User successfully signed in! ');
            }
        }
        
        /**
         * SIGN IN API
         */
        this.checkConnection().then((result) => {
            console.log('Connection Status:', result);
            if (this.validateEntry() && this.state.isConnected) {
                console.log("signing in...");
                firebase.auth().signInWithEmailAndPassword(this.state.email.trim(), this.state.password).then(() => {
                    checkEmailVerified(this.props);
                }).catch((error) => {
                    // Handle Errors here.
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    if (errorCode === 'auth/wrong-password') {
                        alert('Wrong password.');
                    } else {
                        alert(errorMessage);
                    }
                    console.log(error);
                });
            }
        }).catch(reason => console.warn(reason));
    };
    
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
                    <View>
                        <Text style={styles.headerText}> LOGIN </Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name={'md-mail'} size={28} color={'rgba(255, 255, 255, 0.7)'}
                              style={styles.inputIcon}/>
                        <TextInput
                            style={styles.input}
                            placeholder={'Email Address'}
                            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                            underlineColorAndroid="transparent"
                            onChangeText={(text) => this.updateValue(text, 'email')}
                            value={this.state.email}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name={'md-lock'} size={28} color={'rgba(255, 255, 255, 0.7)'}
                              style={styles.inputIcon}/>
                        <TextInput
                            style={styles.input}
                            placeholder={'Password'}
                            secureTextEntry={this.state.showPassword}
                            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                            underlineColorAndroid="transparent"
                            onChangeText={(text) => this.updateValue(text, 'password')}
                        />
                        <TouchableOpacity style={styles.btnEye}
                                          onPress={this.showPassword.bind(this)}>
                            <Icon
                                name={this.state.press === false ? 'md-eye' : 'md-eye-off'}
                                color={'rgba(255, 255, 255, 0.7)'}
                                size={26}
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.submitBtn} onPress={() => this.submit()}>
                        <Text style={styles.text}> Login </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionBtn}
                                      onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                        <Text style={styles.optionText}>Forgot Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionBtn}
                                      onPress={() => this.props.navigation.navigate('Register')}>
                        <Text style={styles.optionText}>Not a member? Sign up Now!</Text>
                    </TouchableOpacity>
                </Content>
            </ImageBackground>
        );
    }
}

export default LoginScreen;
