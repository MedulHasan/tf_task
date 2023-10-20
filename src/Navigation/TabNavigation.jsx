import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HOME, NOTIFICATION, PROFILE, SETTING } from './screenNames';
import Home from '../Screen/Home/Home';
import Notification from '../Screen/Notification';
import Profile from '../Screen/Profile';
import Setting from '../Screen/Setting';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { bottomTabHeight } from '../Constants/constVariable';
import BackBtn from './BackBtn';
import TabItem from './TabItem';
import HomeIcon from '../assets/svgs/home.svg';
import BellIcon from '../assets/svgs/BellOutline.svg';
import UserIcon from '../assets/svgs/user-01.svg';
import SettingIcon from '../assets/svgs/settings.svg';
import ScanBtn from './ScanBtn';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    const {colors} = useTheme();
    const styles = Styles(colors);
    return (
        <Tab.Navigator screenOptions={styles.screenOptions}>
            <Tab.Screen
                name={HOME}
                component={Home} 
                options={{
                    headerTitle: 'Firewall',
                    tabBarIcon: ({focused}) => <TabItem
                        Icon={HomeIcon}
                        focused={focused}
                    />
                }} />
            <Tab.Screen
                name={NOTIFICATION}
                component={Notification} 
                options={{
                    tabBarIcon: ({focused}) => <TabItem
                        Icon={BellIcon}
                        focused={focused}
                    />
                }}
            />
            <Tab.Screen
                name='scan'
                component={'scan'}
                options={{
                    tabBarButton: props => <ScanBtn {...props} />
                }}
            />
            <Tab.Screen
                name={PROFILE}
                component={Profile}
                options={{
                    tabBarIcon: ({focused}) => <TabItem
                        Icon={UserIcon}
                        focused={focused}
                    />
                }}
            />
            <Tab.Screen
                name={SETTING}
                component={Setting}
                options={{
                    tabBarIcon: ({focused}) => <TabItem
                        Icon={SettingIcon}
                        focused={focused}
                    />
                }} 
            />
        </Tab.Navigator>
    );
};

export default TabNavigation;

const Styles = (colors) => StyleSheet.create({
    screenOptions: {
        headerShown: true,
        tabBarShowLabel: false,
        headerShadowVisible: false,
        tabBarStyle: {
            position: 'absolute',
            left: 0,
            bottom: 0,
            backgroundColor: colors.bgPrimary,
            height: bottomTabHeight,
            borderTopWidth: 1,
            borderColor: colors.bgQuaternary,
            elevation: 0,
        },
        headerStyle: {
            backgroundColor: colors.bgPrimary,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
            color: colors.textPrimary,
            fontSize: 20,
            fontFamily: 'Poppins-Bold',
        },
        headerLeft: ()=> <BackBtn />,
    },
});
