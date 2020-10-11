import React from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, TextComponent } from 'react-native';
import styles from './styles';
import { SocialIcon, Text, Icon, Input, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function Login() {

    const navigation = useNavigation();

    function handleNavigationNext() {
        navigation.navigate('Services');
    }

    return (
        <SafeAreaView style={styles.background}>
            <KeyboardAvoidingView >
                <View>
                    <Text h1 style={styles.h1}> uEnergy </Text>
                </View>

                <View>
                    <Input style={styles.inputLabel}
                        label='CPF / CNPJ:'
                        style={styles.input}
                        leftIcon={{ name: 'account-circle', type: 'material', size: 42, color: '#00AFAA'}}
                    />

                    <Input style={styles.divIcon}
                        label='Senha:'
                        style={styles.input}
                        leftIcon={{ name: 'lock', type: 'material' , size: 42, color: '#00AFAA'}}
                        secureTextEntry={true}
                    />

                    <View style={styles.finalDiv}>
                        <View style={styles.buttonDiv}>
                            <Button buttonStyle={styles.finalButton} titleStyle={styles.buttonFinalStyle} title="Acessar" type="outline" onPress={handleNavigationNext}></Button>
                        </View>
                        <View style={styles.buttonDiv}>
                            <Button buttonStyle={styles.finalButton} titleStyle={styles.buttonFinalStyle} title="Criar Conta" type="outline"></Button>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

