import React, {Component} from 'react';
import {View, ImageBackground, Image} from 'react-native';
import {Body, Button, Content, Footer, Header, Left, Right} from "native-base";
import NavWheel from "../../components/NavWheel";
import {HideNavigationBar} from "react-native-navigation-bar-color";

//Images & Icons
import AMIcon from "../../assets/icons/icon_font";
import bgImage from '../../assets/images/drawable-xxxhdpi/q_background.png';
import headerTitle from '../../assets/images/drawable-xxxhdpi/q_by_aston_martin.png';
import q_preface from '../../assets/images/drawable-xxxhdpi/q_description.png';

//styles
import styles from './styles';

class QPersonalisationScreen extends Component {
    constructor(props) {
        super(props);
        
    }
    
    componentDidMount() {
        HideNavigationBar();
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        HideNavigationBar();
    }
    
    state = {};
    
    render() {
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <Header transparent>
                    <Left style={{flex: 1}}>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <AMIcon name={'back_arrow'} style={styles.backArrow}/>
                        </Button>
                    </Left>
                    <Body style={{flex: 1}}>
                        <Image source={headerTitle} resizeMode="contain" style={styles.header}/>
                    </Body>
                    <Right style={{flex: 1}}>
                    
                    </Right>
                </Header>
                <Content contentContainerStyle={styles.contentContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={q_preface} style={styles.image}/>
                    </View>
                </Content>
                <NavWheel/>
                <Footer style={{backgroundColor: 'transparent'}}>
                </Footer>
            </ImageBackground>
        )
    }
}

export default QPersonalisationScreen;