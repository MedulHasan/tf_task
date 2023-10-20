import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

const {width} = Dimensions.get('screen');

const TopTab = ({
    focused,
    setFocused
}) => {
    const {colors} = useTheme();

    const handleRouteChange = (activeText) => {
        setFocused(activeText);
    };

    const styles = Styles(colors, focused);
    return (
        <View style={styles.cont}>
            <Text
                style={[styles.text, styles.dashboard]}
                onPress={() => handleRouteChange('dashboard')}
            >
                Dashboard
            </Text>
            <Text
                style={[styles.text, styles.settings]}
                onPress={() => handleRouteChange('settings')}
            >
                Settings
            </Text>
        </View>
    );
};

export default TopTab;

const Styles = (colors, focused) => StyleSheet.create({
    cont: {
        marginTop: 15,
        backgroundColor: colors.bgTertiary,
        borderRadius: 50,
        flexDirection: 'row',
        padding: 6,
    },

    text: {
        width: (width - 52) / 2,
        textAlign: 'center',
        borderRadius: 50,
        paddingVertical: 8,
    },
    dashboard: {
        backgroundColor: focused == 'dashboard' ? colors.bgSecondary : colors.bgTertiary,
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        color: focused == 'dashboard' ? colors.textPrimary : colors.textSecondary,
    },
    settings: {
        backgroundColor: focused == 'settings' ? colors.bgSecondary : colors.bgTertiary,
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        color: focused == 'settings' ? colors.textPrimary : colors.textSecondary
    },
});

