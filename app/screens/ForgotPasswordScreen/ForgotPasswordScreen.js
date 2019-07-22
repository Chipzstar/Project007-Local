import React, {Component} from 'react';
import {Alert, ImageBackground, Text, TextInput, TouchableOpacity, View} from 'react-native';
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
        this.state = {
            email: "",
            isConnected: false,
        };
    }
    
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
    
    checkConnection = async () => {
        let state = await NetInfo.fetch();
        if (!state.isConnected) {
            this.setState({isConnected: false});
            Alert.alert(
                'No Internet Connection',
                'Please connect to the Internet to Sign Up!',
                [
                    {
                        text: 'Ok',
                        onPress: () => console.log('Ok pressed')
                    }
                ],
                {cancelable: true}
            );
        } else {
            console.log("You are currently connected! Signing in....");
        }
        this.setState({isConnected: state.isConnected});
        console.log(`Connected? ${state.isConnected}`);
    };
    
    validateEmail = () => {
        if (this.state.email == null || this.state.email === "") {
            alert("You must enter an email address!");
            return false;
        }
        return true;
    };
    
    submit() {
        this.checkConnection();
        // Password Reset API
        if (this.validateEmail() && this.state.isConnected) {
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