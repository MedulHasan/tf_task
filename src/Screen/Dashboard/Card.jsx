import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native';
import H4 from '../../Components/CustomText/H4';

const {width} = Dimensions.get('screen')

const Card = ({
    count,
    name
}) => {
    const {colors} = useTheme();

    const styles = Styles(colors);
    return (
        <View style={styles.cont}>
            <Text style={styles.count}>{count}</Text>
            <H4 style={styles.name}>{name}</H4>
        </View>
    )
}

export default Card

const Styles = (colors) => StyleSheet.create({
    cont: {
        width: (width - 52) / 2,
        height: 100,
        backgroundColor: '#25282C',
        marginBottom: 12,
        padding: 12,
        borderRadius: 10,

        shadowColor: "#303337",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    count: {
        fontFamily: 'Poppins-Bold',
        fontSize: 24,
        color: colors.textQuaternary
    },
    name: {
        fontSize: 12,
        marginTop: 12,
        textAlign: 'center'
    }
})