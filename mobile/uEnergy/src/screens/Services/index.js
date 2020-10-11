import React, { useState, useEffect } from 'react';
import { View, ScrollView, SafeAreaView, TextInput, Text, Picker, TouchableOpacity } from 'react-native';
import { CheckBox, Button } from 'react-native-elements'
import { color } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import HeaderComponent from '../../components/Header';

import styles from './styles';

export default function Services() {

    const navigation = useNavigation();

    function handleNavigationServiceList() {
        navigation.navigate('AvailableServices');
    }

    function handleNavigationServiceListMap() {
        navigation.navigate('AvailableServicesMap');
    }

    function handleNavigationOngoingServices() {
        navigation.navigate('ServiceAttendance');
    }

    function handleNavigationFraud(){
        navigation.navigate('ReportFraud');
    }

    function handleNavigationMeasurement(){
        navigation.navigate('ReportMeasurement');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <HeaderComponent />
            <View style={styles.principal}>
                <View style={styles.card}>
                    <Button title="Serviços disponíveis" titleStyle={styles.caixaFotoTexto} type="outline" buttonStyle={styles.caixaFotoAnexo} onPress={handleNavigationServiceList} />
                </View>
                <View style={styles.card}>
                    <Button title="Serviços disponíveis - Map" titleStyle={styles.caixaFotoTexto} type="outline" buttonStyle={styles.caixaFotoAnexo} onPress={handleNavigationServiceListMap} />
                </View>
                <View style={styles.card}>
                    <Button title="Serviços em andamento" titleStyle={styles.caixaFotoTexto} type="outline" buttonStyle={styles.caixaFotoAnexo} onPress={handleNavigationOngoingServices} />
                </View>

                <View style={styles.card}>
                    <Button title="Enviar foto da caixa de energia" titleStyle={styles.caixaFotoTexto} type="outline" buttonStyle={styles.caixaFotoAnexo} onPress={handleNavigationMeasurement} />
                </View>

                <View style={styles.card}>
                    <Button title="Comunicar/Denunciar irregularidades" titleStyle={styles.caixaFotoTexto} type="outline" buttonStyle={styles.caixaFotoAnexo} onPress={handleNavigationFraud} />
                </View>

                <View style={styles.card}>
                    <Button title="Faturas" titleStyle={styles.caixaFotoTexto} type="outline" buttonStyle={styles.caixaFotoAnexo} />
                </View>
            </View>
        </ScrollView>
    );
}