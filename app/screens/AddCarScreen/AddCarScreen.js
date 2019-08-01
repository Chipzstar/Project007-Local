import React, {Component} from 'react';
import {View, Image, ImageBackground, TouchableOpacity, Keyboard, Text} from 'react-native';
import {Left, Button, Header, Content, Body, Footer, Right} from 'native-base';
import {HideNavigationBar, ShowNavigationBar} from "react-native-navigation-bar-color";

//images & icons
import AMIcon from '../../assets/icons/icon_font';
import bgImage from '../../assets/images/drawable-xxxhdpi/home-background.png';
// import inputField from '../../assets/images/drawable-xxxhdpi/rectangle.png'
import addCarLogo from "../../assets/images/drawable-xxxhdpi/add_car.png";
import headerTitle from '../../assets/images/drawable-xxxhdpi/am.png';
import link from '../../assets/images/drawable-xxxhdpi/can_t_find_vin.png';

//components
import NavWheel from "../../components/NavWheel";
import OfflineStatus from "../../components/OfflineNotice";
import Input from "../../components/Input";

//styles
import styles from './styles';

class AddCarScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vin: ''
        };
    }
    
    componentDidMount() {
        HideNavigationBar();
        this.keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            AddCarScreen._keyboardDidShow
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            AddCarScreen._keyboardDidHide
        );
    }
    
    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    
    static _keyboardDidShow() {
        ShowNavigationBar();
    }
    
    static _keyboardDidHide() {
        HideNavigationBar();
    }
    
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <OfflineStatus/>
                <Header transparent>
                    <Left style={{flex: 1}}>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <AMIcon name={'back_arrow'} style={styles.back}/>
                        </Button>
                    </Left>
                    <Body style={{flex: 1}}>
                        <Image source={headerTitle} resizeMode={'contain'} style={styles.header}/>
                    </Body>
                    <Right style={{flex: 1}}>
                    
                    </Right>
                </Header>
                <Content contentContainerStyle={styles.contentContainer}>
                    <View style={styles.carContainer}>
                        <Image
                            source={addCarLogo}
                            style={styles.addCarLogo}
                        />
                    </View>
                    <View style={styles.formContainer}>
                        <View style={styles.inputContainer}>
                            <Input
                                placeholder={'ENTER YOUR VIN NUMBER'}
                                value={this.state.vin}
                                onChangeText={vin => this.setState({vin})}
                                onSubmitEditing={Keyboard.dismiss}
                            />
                        </View>
                        <View>
                            <TouchableOpacity style={styles.submit}>
                                <Text style={styles.submitText}>Continue</Text>
                            </TouchableOpacity>
                        </View>
                        {/*TODO*/}
                        {/*<View >
                            <TouchableOpacity>
                                <Image source={inputField} resizeMode={'contain'}
                                       style={styles.enterVIN}/>
                            </TouchableOpacity>
                        </View>*/}
                        <View style={styles.linksContainer}>
                            <TouchableOpacity>
                                <Image source={link} resizeMode={"contain"}
                                       style={styles.forgotVIN}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Content>
                <NavWheel/>
                <Footer style={{backgroundColor: 'transparent'}}>
                </Footer>
            </ImageBackground>
        )
    }
}

export default AddCarScreen;