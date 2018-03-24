import React, { Component } from 'react';
import { Image } from 'react-native';
import { Button, Card, CardItem, Container, FlatList, Header, ListView, Body, Icon, Text, Title, Left, Right } from 'native-base';

export default class HeaderExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            rooms: []
        };
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        });

        this.setState({ loading: false });
    }

    componentDidMount(){
        return fetch('http://172.17.5.66:3000/songs')
            .then((response) => response.json())
            .then((json) => {
                rooms = json;
                this.setState({
                  loading: false,
                  rooms: json
                }, function() {});
            }).catch((error) =>{
              console.error(error);
            });
    }

    render() {
        if (this.state.loading) {
            return <Expo.AppLoading />;
        } else {
            return (
                <Container>
                    <Header>
                        <Left>
                            <Button transparent>
                                <Image source={{ uri: 'https://png.icons8.com/ios/1600/sausage.png' }} style={{ width: 40, height: 40 }} />
                            </Button>
                        </Left>

                        <Body>
                            <Title>Salami</Title>
                        </Body>

                        <Right/>
                    </Header>

                    <Card style={{ flex: 0 }}>
                        <CardItem header>
                            <Icon name='home' />
                            <Text>Zielona</Text>
                        </CardItem>

                        <CardItem>
                            <Body>
                                <Text>
                                    Opis salki
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem footer>
                            <Button style={{ backgroundColor: '#3fa800' }}>
                                <Text>Rezerwuj</Text>
                            </Button>
                        </CardItem>
                     </Card>
                </Container>
            );
        }
    }
}
