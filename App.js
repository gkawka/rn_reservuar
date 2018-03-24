import React, { Component } from 'react';
import {
    Container,
    Header,
    Body,
    Icon,
    Title,
} from 'native-base';

export default class HeaderExample extends Component {
    constructor(props) {
        super(props);

        this.state = { loading: true };
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        });

        this.setState({ loading: false });
    }

    render() {
        if (this.state.loading) {
            return <Expo.AppLoading />;
        }

        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Salki</Title>
                    </Body>
                </Header>
            </Container>
        );
    }
}
