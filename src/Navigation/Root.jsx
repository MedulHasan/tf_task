import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TAB_NAVIGATION } from './screenNames';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();

const Root = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={TAB_NAVIGATION} component={TabNavigation} />
        </Stack.Navigator>
    );
};

export default Root;
