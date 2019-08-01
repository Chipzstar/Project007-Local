import React, {Component} from 'react';
import {Image, Dimensions} from 'react-native';
import {ExpandableFabMenu} from "react-native-expandable-fab-menu";
import {withNavigation} from 'react-navigation';

//images & icons
import openNavWheelIcon from "../assets/images/drawable-xxxhdpi/button.png";
import closeNavWheelIcon from "../assets/images/drawable-xxxhdpi/close_button.png";
import modelsIcon from "../assets/images/drawable-xxxhdpi/models_nav_icon.png";
import QTIcon from "../assets/images/drawable-xxxhdpi/q_nav_icon.png";
import trackModeIcon from "../assets/images/drawable-xxxhdpi/amrtrack_nav_icon.png";
import AMLiveIcon from "../assets/images/drawable-xxxhdpi/live_nav_icon.png";
import homeIcon from '../assets/images/drawable-xxxhdpi/home_nav_icon.png';
import navWheelBackground from '../assets/images/drawable-xxxhdpi/oval.png';

const {width: WIDTH} = Dimensions.get("window"); //Max Width of phone screen
const {height: HEIGHT} = Dimensions.get("window"); //Max Height of phone screen

class NavWheel extends Component {
    constructor(props) {
        super(props);
    };
    
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ExpandableFabMenu
                closeIcon={
                    <Image
                        style={{alignSelf: 'center', width: 64, height: 64}}
                        source={openNavWheelIcon}/>
                }
                openIcon={
                    <Image
                        style={{alignSelf: 'center', width: 64, height: 64}}
                        source={closeNavWheelIcon}/>
                }
                menuIcons={[
                    <Image
                        style={{alignSelf: 'center', width: 42, height: 42}}
                        source={modelsIcon}
                    />,
                    <Image
                        style={{alignSelf: 'center', width: 42, height: 42}}
                        source={QTIcon}
                    />,
                    <Image
                        style={{alignSelf: 'center', width: 42, height: 42}}
                        source={homeIcon}
                    />,
                    <Image
                        style={{alignSelf: 'center', width: 42, height: 42}}
                        source={trackModeIcon}
                    />,
                    <Image
                        style={{alignSelf: 'center', width: 42, height: 42}}
                        source={AMLiveIcon}
                    />
                ]}
                menuItemClicked={(index) => {
                    switch (index) {
                        case 0:
                            navigate('Models');
                            break;
                        case 1:
                            navigate('Q');
                            break;
                        case 2:
                            navigate('Home');
                            break;
                        case 3:
                            navigate('Track');
                            break;
                        case 4:
                            navigate('Live');
                            break;
                    }
                }}
            />
        )
    }
}

export default withNavigation(NavWheel);