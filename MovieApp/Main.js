/**
 * Created by desver_f on 28/02/17.
 */

import React, { Component } from 'react';
import {
    Navigator
} from 'react-native';
import Movies from './src/Movies';
import Details from './src/Details';

const routeMapper = (route, navigator) => {

    switch (route.name) {
        case 'movie':
            return <Movies {...route.props} navigator={navigator} />;
        case 'details':
            return <Details {...route.props} />;
    }
};

class Main extends Component {

    render() {
        return (
            <Navigator
                initialRoute={{ name: 'movie' }}
                configureScene={() => Navigator.SceneConfigs.HorizontalSwipeJumpFromLeft}
                renderScene={(route, navigator) => routeMapper(route, navigator)}
            />
        );
    }
}

export default Main;