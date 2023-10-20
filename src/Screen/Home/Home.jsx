import React, { useState } from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import TopTab from './TopTab';
import { useTheme } from '@react-navigation/native';
import Dashboard from '../Dashboard/Dashboard';
import Settings from '../Settings/Settings';

const Home = () => {
    const {colors} = useTheme();

    const [focused, setFocused] = useState('dashboard');

    const styles = Styles(colors);

    return (
        <View style={styles.cont}>
            <TopTab
                focused={focused}
                setFocused={setFocused}
            />
                {focused == 'dashboard' && <Dashboard />}
                {focused == 'settings' && <Settings />}
        </View>
    );
};

export default Home;

const Styles = (colors) => StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor: colors.bgPrimary,
        paddingHorizontal: 20,
    },
});
