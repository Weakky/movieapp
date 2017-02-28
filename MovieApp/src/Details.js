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

class Details extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { movie } = this.props;
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                margin: 10,
            }}>
                <Image
                    style={{
                        width: 185,
                        height: 280,
                    }}
                    source={{ uri: movie.url }}
                />
                <Text style={{ fontWeight: 'bold', margin: 20, alignSelf: 'center' }}>Note: {movie.vote_average}</Text>
                <Text style={{ textAlign: 'center' }}>{ movie.overview }</Text>
            </View>
        );
    }
}

export default Details;

Details.propTypes = {
    movie: React.PropTypes.object,
};