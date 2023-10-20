import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '@react-navigation/native';
import HrLine from "../../assets/svgs/hrLine.svg";
import SwitchToggle from "react-native-switch-toggle";

const {width} = Dimensions.get('screen')

const Information = ({
    Icon,
    title,
    details,
}) => {
    const {colors} = useTheme();
    const [on, setOn] = useState(true);

    const styles = Styles(colors);
    return (
        <View>
            <View style={styles.cont}>
                <View style={styles.titleCont}>
                    <Icon width={24} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <SwitchToggle
                    switchOn={on}
                    onPress={() => setOn(!on)}
                    circleColorOff='#FFFFFF4D'
                    circleColorOn='#F6DB56B2'
                    backgroundColorOn='#474C54'
                    backgroundColorOff='#474C54'
                    containerStyle={{
                        width: 80,
                        height: 40,
                        borderRadius: 20,
                        padding: 5,

                        shadowColor: "#B8B8B8",
                        shadowOffset: {
                            width: 0,
                            height: 7,
                        },
                        shadowOpacity: 0.41,
                        shadowRadius: 9.11,

                        elevation: 5,
                    }}
                    circleStyle={{
                        width: 30,
                        height: 30,
                        borderRadius: 20,
                    }}
                />
            </View>
            <Text style={styles.details}>{details}</Text>
            <View style={styles.hr}>
                <HrLine width={width - (32*2)} />
            </View>
        </View>
    )
}

export default Information

const Styles = (colors) => StyleSheet.create({
    cont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleCont: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    title: {
        marginLeft: 8,
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: colors.textPrimary,
        width: width - (64+80+24+8+8),
    },
    details: {
        marginTop: 8,
        fontSize: 10,
        fontFamily: 'Poppins-Regular',
        color: colors.textSecondary,
        width: width - (40+24)
    },
    hr: {
        width: width - (32*2),
        marginVertical: 12
    },
})