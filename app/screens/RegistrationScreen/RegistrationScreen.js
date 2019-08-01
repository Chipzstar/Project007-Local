import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    ImageBackground,
    Text,
    TextInput,
    Alert,
    ToastAndroid,
    Keyboard
} from 'react-native';
import {Header, Body, DatePicker, Content, Left, Button, Title} from "native-base";
import * as firebase from 'react-native-firebase';
import moment from 'moment';
import {HideNavigationBar, ShowNavigationBar} from "react-native-navigation-bar-color";
import NetInfo from "@react-native-community/netinfo";

//images &icons
import bgImage from '../../../app/assets/images/drawable-xxxhdpi/welcome-background.png';
import Icon from 'react-native-vector-icons/Ionicons';
import AMIcon from '../../assets/icons/icon_font'

//styles
import styles from './styles';
import OfflineNotice from "../../components/OfflineNotice";

class RegistrationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password1: '',
            password2: '',
            defaultDate: new Date(moment().subtract(18, 'year').format('YYYY-MM-DDTHH:mm:ss.sssZ')),
            minDate: new Date(moment().subtract(100, 'year').format('YYYY-MM-DDTHH:mm:ss.sssZ')),
            maxDate: new Date(),
            dob: '',
            showPassword: true,
            press: false,
            isConnected: false
        };
    }
    
    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            RegistrationScreen._keyboardDidShow
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            RegistrationScreen._keyboardDidHide
        );
    }
    
    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    
    static _keyboardDidShow(){
        ShowNavigationBar();
    }
    
    static _keyboardDidHide(){
        HideNavigationBar();
    }
    
    static navigationOptions = {
        header: null,
        title: 'Register'
    };
    
    updateValue(text, field) {
        if (field === 'firstName') {
            this.setState({
                firstName: text
            });
        } else if (field === 'lastName') {
            this.setState({
                lastName: text
            });
        } else if (field === 'email') {
            this.setState({
                email: text
            });
        } else if (field === 'password1') {
            this.setState({
                password1: text
            });
        } else if (field === 'password2') {
            this.setState({
                password2: text
            });
        } else if (field === 'dob') {
            this.setState({
                dob: text
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
    
    validateEntry = () => {
        if (this.state.email == null || this.state.email === "") {
            ToastAndroid.show("Email address field cannot be empty!", 3);
            return false;
        } else if (this.state.lastName == null || this.state.lastName === "") {
            ToastAndroid.show("Last Name field cannot be empty!", 3);
            return false;
        } else if (this.state.firstName == null || this.state.firstName === "") {
            ToastAndroid.show("First name field cannot be empty!", 3);
            return false;
        } else if (this.state.dob == null || this.state.dob === "") {
            ToastAndroid.show("Date of Birth field cannot be empty!", 3);
            return false;
        } else if (this.state.password1.toString() !== this.state.password2.toString()) {
            ToastAndroid.show("PASSWORD MISMATCH: Make sure both passwords are the same", 5);
            return false;
        }
        return true;
    };
    
    submit() {
        /**
         * Controls the email verification process
         * Displays an info message box upon successful registration
         * user can choose to sign in straight away
         * @param props
         */
        function verifyEmail(props) {
            let user = firebase.auth().currentUser;
            console.log(user);
            user.sendEmailVerification()
                .then((result) => {
                    Alert.alert(
                        "Registration successful",
                        "A verification link has been sent to your email",
                        [
                            {
                                text: 'Login Now!',
                                onPress: () => {
                                    console.log("'Login Now' option Pressed...");
                                    props.navigation.navigate('Login');
                                }
                            },
                            {
                                text: 'Cancel', onPress: () => console.log('Cancel Pressed...'),
                                style: "cancel"
                            }
                        ],
                        {cancelable: false}
                    );
                    console.log(result);
                }).catch((error) => {
                console.log(error.message);
            });
        }
        
        /**
         * Updates the current user's display name field of the firebase user object
         * user.display name = "first name" + "last name"
         * @param firstName - value entered into the firstName field
         * @param lastName - value entered into the lastName field
         */
        function updateUserProfile(firstName, lastName) {
            let user = firebase.auth().currentUser;
            user.updateProfile({displayName: `${firstName} ${lastName}`})
                .then(() => {
                    console.log("User Profile Created!", user);
                })
                .catch((error) => console.log(error.message));
        }
        
        //SIGN UP API
        this.checkConnection().then((result) => {
            console.log('Connection Status:', result);
            if (this.validateEntry() && this.state.isConnected) {
                firebase.auth().createUserWithEmailAndPassword(this.state.email.trim(), this.state.password1)
                    .then((success) => {
                        console.log('New account created!: ', success);
                        verifyEmail(this.props);
                        updateUserProfile(this.state.firstName.trim(), this.state.lastName.trim());
                    })
                    .catch((error) => {
                        // Handle Errors here.
                        let errorCode = error.code;
                        let errorMessage = error.message;
                        if (errorCode === 'auth/weak-password') ToastAndroid.show('WEAK PASSWORD: Make sure your password is at least 6 characters long.', 5);
                        else ToastAndroid.show(errorMessage, 5);
                        console.log(error);
                    });
            }
        })
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
                        <Title style={styles.headerText}>REGISTER</Title>
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name={'md-contact'} size={28} color={'rgba(255, 255, 255, 0.7)'}
                              style={styles.inputIcon}/>
                        <TextInput
                            style={styles.input}
                            placeholder={'First Name'}
                            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                            underlineColorAndroid="transparent"
                            autoCapitalize={'sentences'}
                            onChangeText={(text) => this.updateValue(text, 'firstName')}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name={'md-contact'} size={28} color={'rgba(255, 255, 255, 0.7)'}
                              style={styles.inputIcon}/>
                        <TextInput
                            style={styles.input}
                            placeholder={'Last Name'}
                            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                            underlineColorAndroid="transparent"
                            autoCapitalize={'sentences'}
                            onChangeText={(text) => this.updateValue(text, 'lastName')}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name={'md-mail'} size={28} color={'rgba(255, 255, 255, 0.7)'}
                              style={styles.inputIcon}/>
                        <TextInput
                            style={styles.input}
                            placeholder={'Email address'}
                            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                            underlineColorAndroid="transparent"
                            onChangeText={(text) => this.updateValue(text, 'email')}
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
                            onChangeText={(text) => this.updateValue(text, 'password1')}
                        />
                        <TouchableOpacity
                            style={styles.btnEye}
                            onPress={this.showPassword.bind(this)}>
                            <Icon
                                name={this.state.press === false ? 'md-eye' : 'md-eye-off'}
                                color={'rgba(255, 255, 255, 0.7)'}
                                size={26}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name={'md-lock'} size={28} color={'rgba(255, 255, 255, 0.7)'}
                              style={styles.inputIcon}/>
                        <TextInput
                            style={styles.input}
                            placeholder={'Confirm password'}
                            secureTextEntry={this.state.showPassword}
                            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                            underlineColorAndroid="transparent"
                            onChangeText={(text) => this.updateValue(text, 'password2')}
                        />
                        <TouchableOpacity
                            style={styles.btnEye}
                            onPress={this.showPassword.bind(this)}>
                            <Icon
                                name={this.state.press === false ? 'md-eye' : 'md-eye-off'}
                                color={'rgba(255, 255, 255, 0.7)'}
                                size={26}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name={'md-calendar'} size={28} color={'rgba(255, 255, 255, 0.7)'}
                              style={styles.inputIcon}/>
                        <DatePicker
                            defaultDate={this.state.defaultDate}
                            minimumDate={this.state.minDate}
                            maximumDate={this.state.maxDate}
                            locale={'en'}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={'fade'}
                            androidMode={'spinner'}
                            placeHolderText={'Date of Birth'}
                            textStyle={styles.input}
                            placeHolderTextStyle={styles.input}
                            onDateChange={(text) => this.updateValue(text, 'dob')}
                            disabled={false}
                        />
                    </View>
                    <TouchableOpacity style={styles.submitBtn} onPress={() => this.submit()}>
                        <Text style={styles.text}> Register </Text>
                    </TouchableOpacity>
                </Content>
            </ImageBackground>
        );
    }
}

export default RegistrationScreen;
