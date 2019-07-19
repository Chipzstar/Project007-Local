import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
// import {Container, Header, Left, Content, ListItem, Icon} from "native-base";
import {NavigationActions} from 'react-navigation';

class CustomSideDrawer extends Component {
    constructor(props) {
        super(props);
    }
    
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    };
    
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <Text style={styles.menuOptions}
                              onPress={this.navigateToScreen('Account')}> Account </Text>
                    </View>
                    <View>
                        <Text>
                            Section 2
                        </Text>
                        <View>
                            <Text onPress={this.navigateToScreen('Page2')}>
                                Page2
                            </Text>
                            <Text onPress={this.navigateToScreen('Page3')}>
                                Page3
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
    
    /*render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Icon name={'close'}/>
                    </Left>
                </Header>
                <Content>
                    <FlatList
                        data={[
                            "ACCOUNT",
                            "HELP",
                            "FAQ'S",
                            "CONTACT US",
                            'SIGN OUT'
                        ]}
                        renderItem={({item}) => (
                            <ListItem noBorder>
                                <TouchableOpacity onPress={}>
                                    <Text style={styles.menuOptions}>{item}</Text>
                                </TouchableOpacity>
                            </ListItem>
                        )}
                    />
                    <FlatList
                        data={["EMERGENCY ASSIST"]}
                        renderItem={({item}) => (
                            <ListItem noBorder>
                                <Text style={[{color: 'red'}, styles.menuOptions]}>{item}</Text>
                            </ListItem>
                        )}
                    />
                </Content>
            </Container>
        )
    }*/
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        opacity: 0.8
    },
    menuOptions: {
        color: 'white',
        fontFamily: 'Cochin',
        textTransform: 'uppercase'
    }
});

export default CustomSideDrawer;