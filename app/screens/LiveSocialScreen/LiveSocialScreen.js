import React, {Component} from 'react';
import { ImageBackground, Image} from 'react-native';
import { Header, Left, Body, Right, Content, Button} from "native-base";
import bgImage from '../../assets/images/drawable-xxxhdpi/live_background.png';
import headerTitle from '../../assets/images/drawable-xxxhdpi/aston_martin_live.png';

//components
import AMIcon from '../../assets/icons/icon_font';

//styles
import styles from './styles';

class LiveSocialScreen extends Component {
    constructor(props) {
        super(props);
    }
    
    state = {};
    
    render() {
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <Header transparent>
                    <Left style={{flex: 1}}>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <AMIcon name={'back_arrow'} style={styles.back}/>
                        </Button>
                    </Left>
                    <Body style={{flex: 1}}>
                        <Image source={headerTitle} resizeMode="contain" style={styles.header}/>
                    </Body>
                    <Right style={{flex: 1}}>
                    
                    </Right>
                </Header>
                <Content>
                
                </Content>
            </ImageBackground>
        )
    }
}

export default LiveSocialScreen;