import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native';
import WifiIcon from '../../assets/svgs/wifi.svg'
import H4 from '../../Components/CustomText/H4';

const Header = () => {
    const {colors} = useTheme();

    const styles = Styles(colors);
  return (
    <View style={styles.topCont}>
        <View style={styles.content}>
            <WifiIcon />
            <Text style={styles.connectionText}>WiFi Connection</Text>
        </View>
        <View style={styles.content}>
            <H4>Connection</H4>
            <View style={styles.dot} />
        </View>
    </View>
  )
}

export default Header

const Styles = (colors) => StyleSheet.create({
    topCont: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    connectionText: {
        fontSize: 18,
        fontFamily: 'Poppins-Bold',
        color: colors.textPrimary,
        marginLeft: 12,
    },
    dot: {
        height: 8,
        width: 8,
        borderRadius: 50,
        backgroundColor: colors.textPrimary,
        marginLeft: 12
    }
})
