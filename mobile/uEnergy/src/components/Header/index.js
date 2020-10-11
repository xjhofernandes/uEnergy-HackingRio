import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const HeaderComponent = () => {
    const navigation = useNavigation();
    return (
        <Header
            leftComponent={{ icon: 'reply', color: '#fff', onPress: () => { navigation.goBack() } }}
            centerComponent={{ text: 'uEnergy', onPress: () => { navigation.navigate('Services') },style: { color: '#fff',  fontSize: 24 } }}
            rightComponent={{ icon: 'home', color: '#fff', onPress: () => { navigation.navigate('Services') } }}
            containerStyle={{
                backgroundColor: '#00a29a',
                justifyContent: 'space-around',
            }}
        />
    )
}

export default HeaderComponent;