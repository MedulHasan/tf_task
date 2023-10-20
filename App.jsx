import React from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Root from './src/Navigation/Root';
import light from './src/Theme/light';

const App = () => {
    return (
        <>
            <StatusBar
                backgroundColor={'#2C2F34'}
                barStyle={'light-content'}
            />
            <NavigationContainer theme={light}>
                <Root />
            </NavigationContainer>
        </>
    );
};

export default App;
