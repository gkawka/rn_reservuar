import React, { Component } from 'react';
import {
    Platform,
    StatusBar, StyleSheet,
    Text,
} from 'react-native';

import {Header,Left,Button,Icon,Right,Body,Title} from 'native-base';

export function getStatusBarHeight() {
    return 300;
}

export default class AppHeader extends Component {
    render() {
        return (
            <Header style={styles.header}>
                <Left>
                    <Button transparent
                            onPress={()=>this.props.openDrawer()}
                    >
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                <Title>Nazwa Aplikacji</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='bulb' />
                    </Button>
                </Right>
            </Header>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingTop: getStatusBarHeight(),
        height: 54 + getStatusBarHeight(),
    },
});

module.exports = AppHeader;
