import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'

const TabItem = ({
    Icon,
    focused
}) => {
    const {colors} = useTheme();

    const styles = Styles(colors);
    return (
        <View>
            <Icon
                height={24}
                width={24}
                fill={focused ? colors.bgQuinary : colors.textTertiary}
            />
        </View>
    )
}

export default TabItem

const Styles = (colors) => StyleSheet.create({
})