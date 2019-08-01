import React from "react";
import {Dimensions, SafeAreaView} from "react-native";
import {
    createAppContainer,
    createSwitchNavigator,
    createStackNavigator,
    createDrawerNavigator,
    DrawerItems
} from "react-navigation";
import {Container, Content, Header, Icon, Left, Button, Footer} from "native-base";

import {DrawerActions} from 'react-navigation-drawer';
// screens
import RegistrationScreen from "../screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SettingScreen from "../screens/SettingsScreen/SettingScreen";
import AuthLoadingScreen from "../screens/AuthLoadingScreen/AuthLoadingScreen";
import ModelsScreen from '../screens/ModelsScreen/ModelsScreen';
import TrackModeScreen from '../screens/TrackModeScreen/TrackModeScreen';
import QPersonalisationScreen from '../screens/QPersonalisationScreen/QPersonalisationScreen';
import LiveSocialScreen from '../screens/LiveSocialScreen/LiveSocialScreen';
import Logout from "../components/Logout";
import AddCarScreen from "../screens/AddCarScreen/AddCarScreen";
import AccountScreen from "../screens/AccountScreen/AccountScreen";
import HelpScreen from "../screens/HelpScreen/HelpScreen";
import FAQScreen from "../screens/FAQScreen/FAQScreen";
import ContactScreen from "../screens/ContactScreen/ContactScreen";
import EmergencyAssistScreen from "../screens/EmergencyAssistScreen/EmergencyAssistScreen";
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen'
import PasswordResetScreen from "../screens/PasswordResetScreen/PasswordResetScreen";

// stylesheets
import styles from './styles';

const CustomSideDrawer = props => (
    <Container style={styles.container}>
        <Content>
            <Button transparent
                    style={styles.closeBtn}
                    onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}>
                <Icon name={'close'} style={{color: 'white'}}/>
            </Button>
            <SafeAreaView>
                <DrawerItems
                    {...props}
                    items={props.items.filter((item) =>
                        (item.routeName !== 'Home' && item.routeName !== 'SignOut' && item.routeName !== 'ER_ASSIST' && item.routeName !== 'HiddenRoute')
                    )}
                    labelStyle={styles.drawerOptions}
                />
                <DrawerItems
                    {...props}
                    items={props.items.filter((item) =>
                        (item.routeName === 'ER_ASSIST' && item.routeName !== 'HiddenRoute')
                    )}
                    labelStyle={styles.ER_option}
                />
            </SafeAreaView>
        </Content>
        <Footer style={{backgroundColor: 'transparent'}}>
            <SafeAreaView>
                <DrawerItems
                    {...props}
                    labelStyle={[{alignSelf: 'flex-end'}, styles.drawerOptions]}
                    items={props.items.filter((item) => item.routeName === 'SignOut' && item.routeName !== 'HiddenRoute')}
                />
            </SafeAreaView>
        </Footer>
    </Container>
);

const {width: WIDTH} = Dimensions.get("window"); //Max Width of phone screen

export const HomeStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: "Dashboard"
        }
    },
    Models: {
        screen: ModelsScreen
    },
    Track: {
        screen: TrackModeScreen
    },
    Q: {
        screen: QPersonalisationScreen
    },
    Live: {
        screen: LiveSocialScreen
    },
    AddCar: {
        screen: AddCarScreen
    }
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        header: null
    }
});

export const SignedOut = createStackNavigator({
    Welcome: {
        screen: WelcomeScreen,
        navigationOptions: {
            header: null
        }
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            title: "Sign In"
        }
    },
    Register: {
        screen: RegistrationScreen,
        navigationOptions: {
            title: 'Sign Up'
        }
    },
    ForgotPassword: {
        screen: ForgotPasswordScreen,
        navigationOptions: {
            title: 'Forgot Password'
        }
    },
    PasswordReset: {
        screen: PasswordResetScreen,
        navigationOptions: {
            title: 'Password Reset'
        }
    }
}, {
    initialRouteName: 'Welcome'
});

/*const MainNavigator = Platform.select({
	ios: createBottomTabNavigator({ HomeStack, SettingsScreen, Logout }),
	android: createDrawerNavigator({ HomeStack, SettingsScreen, Logout })
});*/

export const SignedIn = createDrawerNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            title: "Dashboard",
        }
    },
    Account: {
        screen: AccountScreen,
        navigationOptions: {
            title: 'ACCOUNT',
        }
    },
    Help: {
        screen: HelpScreen,
        navigationOptions: {
            title: 'HELP',
        }
    },
    FAQ: {
        screen: FAQScreen,
        navigationOptions: {
            title: "FAQ's",
        }
    },
    Contact: {
        screen: ContactScreen,
        navigationOptions: {
            title: 'CONTACT US',
        }
    },
    ER_ASSIST: {
        screen: EmergencyAssistScreen,
        navigationOptions: {
            title: 'EMERGENCY ASSIST',
        }
    },
    Settings: {
        screen: SettingScreen,
        navigationOptions: {
            title: 'Settings',
        }
    },
    SignOut: {
        screen: Logout,
        navigationOptions: {
            title: "Sign Out",
        }
    }
}, {
    drawerWidth: (WIDTH * 0.75),
    drawerBackgroundColor: 'transparent',
    contentComponent: CustomSideDrawer,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentOptions: {
        itemsContainerStyle: styles.menuContainer
    }
    // order: ['Home', 'Account', 'Help', 'FAQ', 'Contact', 'ER_ASSIST', 'Settings', 'SignOut']
});

export const RootNavigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: SignedIn,
        Auth: SignedOut
    },
    {
        initialRouteName: "AuthLoading"
    }
);

const AppContainer = createAppContainer(RootNavigator);

export default AppContainer;
