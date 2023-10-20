import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Header from './Header';
import Information from './Information';
import Barchart from './Barchart';
import Card from './Card';
import { bottomTabHeight } from '../../Constants/constVariable';


const Dashboard = () => {
    const {colors} = useTheme();

    const styles = Styles(colors);
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            overScrollMode="never"
            style={styles.scroll}
        >
            <View
                style={styles.cont}
            >
                <Header />
                <Information />
                <Barchart />
            </View>
            <View style={styles.subCont}>
                <View style={styles.cardCont}>
                    <Card
                        count={0}
                        name={'Malicious Website'}
                    />
                    <Card
                        count={13}
                        name={'Ad Blocked'}
                    />
                </View>
                <View style={styles.cardCont}>
                    <Card
                        count={6}
                        name={'Unwanted codes in QR'}
                    />
                    <Card
                        count={1}
                        name={'Phishing/Scam'}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default Dashboard;

const Styles = (colors) => StyleSheet.create({
    scroll: {
        marginBottom: bottomTabHeight,
    },
    cont: {
        backgroundColor: '#25282C',
        marginTop: 24,
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
    },
    subCont: {
        marginTop: 24,
        marginBottom: 12
    },
    cardCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

})
