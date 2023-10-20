import { View, ScrollView, StyleSheet, Text, Dimensions } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import { bottomTabHeight } from '../../Constants/constVariable';
import Information from './Information';
import NetworkIcon from '../../assets/svgs/network.svg';
import VirusIcon from '../../assets/svgs/virus.svg';
import BlockIcon from '../../assets/svgs/block.svg';
import StopIcon from '../../assets/svgs/stop.svg';
import SpyIcon from '../../assets/svgs/spy.svg';
import ScanIcon from '../../assets/svgs/scan-svgrepo.svg';
import WarningIcon from '../../assets/svgs/warning.svg';

const {width} = Dimensions.get('screen')

const Settings = () => {
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
                <Information
                    Icon={NetworkIcon}
                    title={'Monitor Connections'}
                    details={'Real-Time monitoring'}
                />
                <Information
                    Icon={VirusIcon}
                    title={'Malicious Website Blocker'}
                    details={'Protection against malicious websites'}
                />
                <Information
                    Icon={BlockIcon}
                    title={'Ad Blocker'}
                    details={'Block any unwanted Ads'}
                />
                <Information
                    Icon={StopIcon}
                    title={'Block Persistent & Distracting Ads'}
                    details={'Block distracting ads'}
                />
                <Information
                    Icon={SpyIcon}
                    title={'Phishing/Scam Detection'}
                    details={'Detect phishing and scam attempts'}
                />
                <Information
                    Icon={ScanIcon}
                    title={'QR Code Scanner'}
                    details={'Scan any unwanted codes before take you in'}
                />
                <View style={styles.warningCont}>
                    <WarningIcon />
                    <Text style={styles.warningText}>Configuring firewall settings incorrectly can leave your device and personal information vulnerable to cyber attacks. Please ensure you have a thorough understanding of the settings before making any changes</Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default Settings;


const Styles = (colors) => StyleSheet.create({
    scroll: {
        marginBottom: bottomTabHeight,
    },
    cont: {
        backgroundColor: '#25282C',
        marginTop: 24,
        padding: 12,
        borderRadius: 10,
        marginBottom: 24,

        shadowColor: "#303337",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 10,
    },
    warningCont: {
        flexDirection: 'row',
    },
    warningText: {
        fontSize: 10,
        fontFamily: 'Poppins-Regular',
        color: colors.textPrimary,
        width: width - (40+24+8),
        marginLeft: 8
    }
})