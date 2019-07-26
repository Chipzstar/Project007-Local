import React, {Component} from 'react';
import {View, Text, Switch, RefreshControl, Image, Platform} from 'react-native';
import {Container, Header, Content, Title, Left, Body, Button } from "native-base";
import Avatar from '../../assets/images/avatar.jpg'
import {SettingsScreen} from "react-native-settings-screen";

//icons
import AMIcon from '../../assets/icons/icon_font';
import Icon from 'react-native-vector-icons/Entypo';

//styles
import styles from './styles';
const fontFamily = Platform.OS === 'ios' ? 'Avenir' : 'sans-serif';

const renderProfile = () => (
    <View style={styles.profileContainer}>
        <Image source={Avatar} style={styles.profileImage}/>
        <View style={{flex: 1}}>
            <Text style={styles.profileTitle}>Chisom Oguibe</Text>
            <Text style={styles.profileSubtitle}>chisom.oguibe@googlemail.com</Text>
        </View>
    </View>
);

class ProfileScreen extends Component {
    constructor(props){
        super(props);
    }
    
    state = {
        refreshing: false,
    };
    
    settingsData = SettingsData = [
        {
            type: 'CUSTOM_VIEW',
            key: 'hero',
            render: renderProfile
        },
        {
            type: 'SECTION',
            header: 'My Section'.toUpperCase(),
            footer:
                'Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
            rows: [
                {
                    title: 'A row',
                    showDisclosureIndicator: true,
                },
                {title: 'A non-tappable row'},
                {
                    title: 'This row has a',
                    subtitle: 'Subtitle',
                    showDisclosureIndicator: true,
                },
                {
                    title: 'Long title. So long long long long long long long',
                    subtitle:
                        'And so is the subtitle. Even longer longer longer longer longer',
                },
                {
                    title: 'Switch',
                    renderAccessory: () => <Switch value onValueChange={() => {
                    }}/>,
                },
                {
                    title: 'Text',
                    renderAccessory: () => (
                        <Text style={{color: '#999', marginRight: 6, fontSize: 18}}>
                            Maybe
                        </Text>
                    ),
                },
                {
                    title: 'Custom view',
                    renderAccessory: () => (
                        <View
                            style={{
                                width: 30,
                                height: 30,
                                backgroundColor: 'blue',
                            }}
                        />
                    ),
                    showDisclosureIndicator: true,
                },
            ],
        },
        {
            type: 'SECTION',
            header: 'My Other Section'.toUpperCase(),
            rows: [
                {
                    title: 'Dolor Nullam',
                    showDisclosureIndicator: true,
                },
                {
                    title: 'Nulla vitae elit libero',
                    renderAccessory: () => (
                        <Text style={{color: '#999', marginRight: 6, fontSize: 18}}>
                            Dapibus
                        </Text>
                    ),
                },
                {
                    title: 'Ipsum Lorem Venenatis',
                    subtitle: 'Vestibulum Inceptos Fusce Justo',
                    renderAccessory: () => (
                        <Text style={{color: '#999', marginRight: 6, fontSize: 18}}>
                            Yes
                        </Text>
                    ),
                    showDisclosureIndicator: true,
                },
                {
                    title: 'Cras Euismod',
                    renderAccessory: () => (
                        <Icon
                            style={{marginTop: 3, marginRight: 6}}
                            name="colours"
                            size={32}
                            color="black"
                        />
                    ),
                    showDisclosureIndicator: true,
                },
            ],
        },
        {
            type: 'SECTION',
            header: 'My Third Section'.toUpperCase(),
            rows: [
                {
                    title: 'Different title style',
                    showDisclosureIndicator: true,
                    titleStyle: {
                        color: 'red',
                    },
                },
            ],
        },
        {
            type: 'CUSTOM_VIEW',
            render: () => (
                <Text
                    style={{
                        alignSelf: 'center',
                        fontSize: 18,
                        color: '#999',
                        marginBottom: 40,
                        marginTop: -30
                    }}>
                    Settings Screen
                </Text>
            ),
        },
    ];
    
    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <AMIcon name={'back_arrow'} style={{color: 'white', aspectRatio: 0.5}}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Settings</Title>
                    </Body>
                </Header>
                <Content>
                    <SettingsScreen
                        data={this.settingsData}
                        globalTextStyle={{fontFamily: 'Sans-serif'}}
                        scrollViewProps={{
                            refreshControl: (
                                <RefreshControl
                                    refreshing={this.state.refreshing}
                                    onRefresh={() => {
                                        this.setState({refreshing: true});
                                        setTimeout(() => this.setState({refreshing: false}), 3000)
                                    }}
                                />
                            ),
                        }}
                    />
                </Content>
            </Container>
        );
    }
}

export default ProfileScreen;