import React, {Component} from 'react';
import {Image} from 'react-native';
import {
    Button,
    Card,
    CardItem,
    Container,
    FlatList,
    Header,
    ListView,
    Body,
    Icon,
    Text,
    Title,
    Left,
    Right,
    Content
} from 'native-base';

export default class HeaderExample extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        isReady: false,
        rooms: []
    };

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        });

        this.setState({isReady: true});
    }

    componentDidMount() {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => {
                rooms = json;
                this.setState({
                    rooms: json
                }, function () {
                });
            }).catch((error) => {
                console.error(error);
            });
    }

    render() {

        if (this.state.isReady === false) {
            return <Expo.AppLoading/>;
        }

        let cards = [];
        this.state.rooms.forEach((item) => {
            cards.push(
                <Card key={item.id} style={{flex: 0}}>
                    <CardItem header>
                        <Icon name='home'/>
                        <Text>{item.username}</Text>
                    </CardItem>

                    <CardItem>
                        <Body>
                        <Text>
                            {item.name}
                        </Text>
                        </Body>
                    </CardItem>

                    <CardItem footer>
                        <Button>
                            <Text>Rezerwuj</Text>
                        </Button>
                    </CardItem>
                </Card>
            );
        });

        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Image source={{uri: 'https://png.icons8.com/ios/1600/sausage.png'}}
                                   style={{width: 40, height: 40}}/>
                        </Button>
                    </Left>

                    <Body>
                    <Title>Salami</Title>
                    </Body>

                </Header>

                <Content>
                    {cards}
                </Content>
            </Container>
        );
    }
}
