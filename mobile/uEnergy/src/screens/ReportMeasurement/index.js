import React, { useState, useEffect } from 'react';
import { View, ScrollView, SafeAreaView, TextInput, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { CheckBox } from 'react-native-elements';
import HeaderComponent from '../../components/Header';
import AnexoFotos from '../../components/Picture';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function ReportMeasurement() {

    const navigation = useNavigation();

    function handleNavigationBack(){
        navigation.goBack();
    }

    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
                <HeaderComponent />
                <View style={styles.principal}>
                    <Text>Bem-vindo(a) à tela de Medição Virtual </Text>

                    <Text>*Campos Obrigatórios</Text>
                    <View style={styles.card}>
                        <Text style={styles.tituloCard}>Medição Virtual</Text>
                        <Text>Leitura do medidor de consumo de energia.</Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.tituloCard}>Medição Virtual</Text>

                        <Text>Número da medição*</Text>
                        <TextInput style={styles.inputText} placeholder="Digite o número da medição"></TextInput>

                        <Text>Mês referência*</Text>
                        <TextInput style={styles.inputText} placeholder="Digite o mês de referência"></TextInput>

                    </View>

                    <View style={styles.card}>
                        <Text style={styles.tituloCard}>Fotos da ocorrência</Text>

                        <Text>Se desejar, anexe foto(s) da ocorrência</Text>
                        <Text> Notas: </Text>
                        <Text> 1. O tamanho total dos anexos não pode ultrapassar 9Mb e permite as extensões jpg, jpeg, png, bmp, gif, doc, docx e pdf.</Text>
                        <Text> 2. Você pode anexar até 3 arquivos.</Text>

                        <AnexoFotos/>
                        <Button title="Tirar foto com a Camera" titleStyle={styles.caixaFotoTexto} type="outline" buttonStyle={styles.caixaFotoAnexo} />
                    </View>
                </View>
                <View style={styles.containerFinal}>
                    <View style={styles.divBotaoFinal}>
                    <Button buttonStyle={styles.botaoFinal} title="Voltar" onPress={handleNavigationBack}></Button>
                    </View>
                    <View style={styles.divBotaoFinal}>
                        <Button buttonStyle={styles.botaoFinalDois} title="Enviar" titleStyle={styles.fontBotaoFinalDois}></Button>
                    </View>
                </View>
            </ScrollView >
        </>
    )
}