import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { DASHBOARD, SETTINGS } from '../../Navigation/screenNames';
import Dashboard from '../Dashboard/Dashboard';
import Settings from '../Settings/Settings';

const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={DASHBOARD} component={Dashboard} />
            <Tab.Screen name={SETTINGS} component={Settings} />
        </Tab.Navigator>
    );
};

export default TopTab;

