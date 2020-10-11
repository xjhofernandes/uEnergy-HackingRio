import React, { useState, useEffect } from 'react';
import { View, ScrollView, SafeAreaView, TextInput, Text, TouchableOpacity } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import HeaderComponent from '../../components/Header';
import AnexoFotos from '../../components/Picture';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function ServiceAttendance() {
    const [checked, setChecked] = React.useState('sim');

    const navigation = useNavigation();

    function handleNavigationgoBack() {
        navigation.goBack();
    }

    function RadioForm() {
        return (
            <View>
                <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    onPress={(value) => { this.setState({ value: value }) }}
                />
            </View>
        );
    }

    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
                <HeaderComponent />
                <View style={styles.principal}>
                    <Text>Bem-vindo(a) ao Atendimento de Serviço</Text>

                    <Text>*Campos Obrigatórios</Text>
                    <View style={styles.card}>
                        <Text style={styles.tituloCard}>Atendimento de Serviço</Text>
                        <Text>Informações importantes para o atendimento do serviço.</Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.tituloCard}>Dados do Atendimento</Text>

                        <Text>CPF do Responsável*</Text>
                        <TextInput style={styles.inputText} placeholder="Digite o CPF do Responsável"></TextInput>

                        <Text>Nome do Responsável*</Text>
                        <TextInput style={styles.inputText} placeholder="Digite o Nome do Responsável"></TextInput>
                        <Text />

                        <Text>Foi possível realizar o atendimento?*</Text>
                          <CheckBox
                            title='Sim'
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            checked={true}
                            containerStyle={styles.containerRadio}
                        />
                        <CheckBox
                            title='Não'
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            checked={false}
                            containerStyle={styles.containerRadio}
                        />
                    </View>
                </View>
                <View style={styles.containerFinal}>
                    <View style={styles.divBotaoFinal}>
                        <Button buttonStyle={styles.botaoFinal} title="Voltar" onPress={handleNavigationgoBack} ></Button>
                    </View>
                    <View style={styles.divBotaoFinal}>
                        <Button buttonStyle={styles.botaoFinalDois} title="Enviar" titleStyle={styles.fontBotaoFinalDois}></Button>
                    </View>
                </View>
            </ScrollView >
        </>
    )
}