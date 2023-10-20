import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native';
import { userStyle } from '../../Helper/ConvertStyleInArray';

const H4 = ({
    children,
    color,
    style
}) => {
    const {colors} = useTheme();

    const styles = Styles(colors, color);
    return (
        <Text style={[styles.cont, ...userStyle(style)]}>
            {children}
        </Text>
    )
}

export default H4

const Styles = (colors, color) => StyleSheet.create({
    cont: {
        color: color || colors.textTertiary,
        fontFamily: 'Poppins-Regular',
        fontSize: 10,
        textAlign: 'left'
    },
})