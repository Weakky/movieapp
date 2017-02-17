/**
 * Created by desver_f on 17/02/17.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    Dimensions,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { API_KEY, routes } from './api';

const IMAGE_WIDTH = 185 / 2;
const IMAGE_HEIGHT = 280 / 2;


class Movie extends Component {

    render() {
        const { movie } = this.props;
        const imageUrl = routes.poster
            .replace(':poster_name', movie.poster_path);

        return (
            <Animatable.View
                animation="bounceInUp"
                duration={1500}
                useNativeDriver
            >
                <View style={{
                    flexDirection: 'column',
                    elevation: 10,
                    backgroundColor: 'black',
                    borderRadius: 2,
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                }}>
                    <Image
                        style={{
                            width: IMAGE_WIDTH,
                            height: IMAGE_HEIGHT,
                            borderRadius: 2,
                        }}
                        source={{ uri: imageUrl }}
                    />
                </View>
                <View style={{ width: IMAGE_WIDTH }}>
                    <Text
                        style={{
                            marginTop: 5,
                            fontSize: 12,
                            fontWeight: 'bold',
                            alignSelf: 'center',
                        }}
                    >
                        { movie.title }
                    </Text>
                </View>
            </Animatable.View>
        );
    }
}

Movie.propTypes = {
    movie: React.PropTypes.object,
};

export default class Movies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
        };

        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    }

    async componentWillMount() {
        const url = routes.discover
            .replace(':api_key', API_KEY)
            .replace(':lang', 'fr-FR');
        const response = await fetch(url, { method: 'GET' });
        const { results: movies } = await response.json();

        this.setState({ movies });
    }

    render() {
        const { movies } = this.state;
        const { width } = Dimensions.get('window');

        const padding =  Math.floor((width % 3) / 2);

        console.log(width, padding);

        if (!movies.length) {
            return <Text>Loading...</Text>;
        }

        return (
            <ListView
                contentContainerStyle={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                    justifyContent: 'space-around',
                    padding: 10,
                }}
                dataSource={this.ds.cloneWithRows(movies)}
                renderRow={(movie, i) => (
                    <Movie
                        key={i}
                        movie={movie}
                    />
                )}
            />
        );
    }
}
