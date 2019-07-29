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
import SmallTrackTile from "../../components/AsyncImages/Track/SmallTrackTile";
import BigTrackTile from "../../components/AsyncImages/Track/BigTrackTile";

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
                    <Left style={{flex: 1}}>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <AMIcon name={'back_arrow'} style={{color: 'white', height: 20, width: 30}}/>
                        </Button>
                    </Left>
                    <Body style={{flex: 1}}>
                        <Image source={headerTitle} resizeMode="contain" style={styles.header}/>
                    </Body>
                    <Right style={{flex: 1}}>
                    
                    </Right>
                </Header>
                <Content contentContainerStyle={styles.contentContainer}>
                    <BigTrackTile image={'find_my_track'}/>
                    <SmallTrackTile image={'telemetry'}/>
                    <SmallTrackTile image={'drivers_club'}/>
                    <BigTrackTile image={'car_set_up'}/>
                    <SmallTrackTile image={'record_in_car'}/>
                    <SmallTrackTile image={'lap_timer'}/>
                </Content>
                <NavWheel/>
                <Footer style={{backgroundColor: 'transparent'}}>
                </Footer>
            </ImageBackground>
        )
    }
}

export default TrackModeScreen;