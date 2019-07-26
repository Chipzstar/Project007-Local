import React, {Component} from 'react';
import {ImageBackground, Image} from 'react-native';
import {Body, Button, Content, Footer, Header, Left, Right} from "native-base";
import {HideNavigationBar} from "react-native-navigation-bar-color";

//images and icons
import AMIcon from '../../assets/icons/icon_font';
import bgImage from '../../assets/images/drawable-xxxhdpi/trackMode_background.png';
import headerTitle from "../../assets/images/drawable-xxxhdpi/track_mode_header.png";

//components
import OfflineStatus from '../../components/OfflineNotice';
import NavWheel from "../../components/NavWheel";
import FindTrackTile from "../../components/AsyncImages/Track/FindTrackTile";
import SetUpTile from "../../components/AsyncImages/Track/SetUpTile";
import TelemetryTile from "../../components/AsyncImages/Track/TelemetryTile";
import CarRecordTile from "../../components/AsyncImages/Track/CarRecordTile";
import DriversClubTile from "../../components/AsyncImages/Track/DriversClubTile";
import LapTimerTile from "../../components/AsyncImages/Track/LapTimerTile";

//styles
import styles from './styles';

class TrackModeScreen extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        HideNavigationBar();
    }
    
    state = {};
    
    render() {
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <OfflineStatus/>
                <Header transparent>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <AMIcon name={'back_arrow'} style={{color: 'white', height: 20, width: 30}}/>
                        </Button>
                    </Left>
                    <Body>
                        <Image source={headerTitle} resizeMode="contain" style={styles.header}/>
                    </Body>
                    <Right>
                    
                    </Right>
                </Header>
                <Content contentContainerStyle={styles.contentContainer}>
                    <FindTrackTile/>
                    <TelemetryTile/>
                    <DriversClubTile/>
                    <SetUpTile/>
                    <CarRecordTile/>
                    <LapTimerTile/>
                </Content>
                <NavWheel/>
                <Footer style={{backgroundColor: 'transparent'}}>
                </Footer>
            </ImageBackground>
        )
    }
}

export default TrackModeScreen;