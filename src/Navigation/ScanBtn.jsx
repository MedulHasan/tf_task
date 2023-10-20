import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
import ScanBorder from '../assets/svgs/scanBorder.svg'
import ScanBtnIcon from '../assets/svgs/scan.svg'
import RadialGradient from 'react-native-radial-gradient';

const ScanBtn = () => {
    const {colors} = useTheme();

    const styles = Styles(colors);
    return (       
        <View style={styles.cont}>
            <ScanBtnIcon />
        </View>
    )
}

export default ScanBtn

const Styles = (colors) => StyleSheet.create({
    cont: {
        top: -45,
    },
})