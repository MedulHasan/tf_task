import { StyleSheet, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import { ml } from '../Constants/constVariable';
import BackIcon from '../assets/svgs/backBtn.svg';

const BackBtn = () => {
    const {colors} = useTheme();
    const styles = Styles(colors);
    return (
        <View style={styles.cont}>
            <BackIcon />
        </View>
    );
};

export default BackBtn;

const Styles = (colors) => StyleSheet.create({
    cont: {
        marginLeft: ml,
        height: 32,
        width: 32,
        borderRadius: 50,
    },
});
