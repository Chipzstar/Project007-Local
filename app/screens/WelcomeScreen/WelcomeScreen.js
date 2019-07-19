import React, { Component } from 'react';
import { ImageBackground, View, Image } from 'react-native';
import bgImage from '../../assets/images/drawable-xxxhdpi/welcome-background.png';
import welcome from '../../assets/images/drawable-xxxhdpi/welcome.png';
import logo from '../../assets/images/drawable-xxxhdpi/am_white.png';
import loginBtn from '../../assets/images/drawable-xxxhdpi/login.png';
import registerBtn from '../../assets/images/drawable-xxxhdpi/register.png';
import MenuItem from '../../components/MenuItem';
import styles from './styles';
import {HideNavigationBar} from "react-native-navigation-bar-color";
import OfflineNotice from "../../components/OfflineNotice";

class WelcomeScreen extends Component {
	componentDidMount() {
		HideNavigationBar();
	}
	
	componentDidUpdate(prevProps, prevState, snapshot) {
		HideNavigationBar();
	}
	
	render() {
		const { navigate } = this.props.navigation;
		return (
			<ImageBackground source={bgImage} style={styles.backgroundContainer}>
				<OfflineNotice />
                <View style={styles.logoContainer}>
					<Image source={logo} resizeMode="contain" style={styles.logo} />
					<Image source={welcome} resizeMode="contain" style={styles.welcome} />
				</View>
				<View style={styles.menuContainer}>
					<MenuItem onPress={() => navigate('Login')} itemImage={loginBtn} />
					<MenuItem onPress={() => navigate('Register')} itemImage={registerBtn} />
				</View>
			</ImageBackground>
		);
	}
}

export default WelcomeScreen;
