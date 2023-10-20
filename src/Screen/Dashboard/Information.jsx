import { StyleSheet, Dimensions, View } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native';
import RadialGradient from 'react-native-radial-gradient';
import H4 from '../../Components/CustomText/H4';
import HrLine from "../../assets/svgs/hrLine.svg";
import VtLine from "../../assets/svgs/vtLine.svg";

const {width} = Dimensions.get('screen')

const Information = () => {
    const {colors} = useTheme();

    const styles = Styles(colors);
    return (
        <>
            <View style={styles.cont}>
                <View style={styles.leftCont}>
                    <View style={styles.content}>
                        <H4 color={colors.textSecondary}>WiFi Name: </H4>
                        <H4 color={colors.textQuaternary}>TechForing</H4>
                    </View>
                    <View style={[styles.content, styles.mv]}>
                        <H4 color={colors.textSecondary}>Network: </H4>
                        <H4 color={colors.textTertiary}>Monitoring</H4>
                    </View>
                    <View style={styles.content}>
                        <H4 color={colors.textSecondary}>Firewall: </H4>
                        <H4 color={colors.textTertiary}>Active</H4>
                    </View>
                </View>
                <View style={styles.vt}>
                    <VtLine />
                </View>
                <View style={styles.leftCont}>
                    <View style={styles.content}>
                        <H4 color={colors.textSecondary}>Network Type: </H4>
                        <H4 color={colors.textPrimary}>Public</H4>
                    </View>
                    <View style={[styles.content, styles.mv]}>
                        <H4 color={colors.textSecondary}>Protocol: </H4>
                        <H4 color={colors.textTertiary}>WPA</H4>
                    </View>
                </View>
            </View>
            <View style={styles.hr}>
                <HrLine width={width - (32*2)} />
            </View>
        </>
    )
}

export default Information

const Styles = (colors) => StyleSheet.create({
    cont: {
        flexDirection: 'row',
        marginTop: 18
    },
    leftCont: {
        width: (width - (32*2+25)) / 2,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    mv: {
        marginVertical: 11
    },
    hr: {
        width: width - (32*2),
        marginVertical: 16
    },
    vt: {
        marginHorizontal: 12,
        height: 78
    }
})