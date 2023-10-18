import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HOME, NOTIFICATION, PROFILE, SETTING } from './screenNames';
import Home from '../Screen/Home/Home';
import Notification from '../Screen/Notification';
import Profile from '../Screen/Profile';
import Setting from '../Screen/Setting';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={HOME} component={Home} />
            <Tab.Screen name={NOTIFICATION} component={Notification} />
            <Tab.Screen name={PROFILE} component={Profile} />
            <Tab.Screen name={SETTING} component={Setting} />
        </Tab.Navigator>
    );
};

export default TabNavigation;
