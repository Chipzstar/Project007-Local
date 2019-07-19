import React, {Component} from 'react';
import {View, Text } from 'react-native';
import {Container, Left, Button, Header, Content, Body, Title} from 'native-base'
import AMIcon from '../../assets/icons/icon_font';

//styles
import styles from './styles';

class FAQScreen extends Component {
    constructor(props) {
        super(props);
    }
    
    state = {};
    
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                            <AMIcon name={'burger'} style={styles.hamburger}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>FAQs</Title>
                    </Body>
                </Header>
                <Content>
                    <View style={styles.welcome}>
                        <Text>Welcome to the FAQScreen Screen!</Text>
                    </View>
                </Content>
            </Container>
        )
    }
}

export default FAQScreen;