import React, { useState, useEffect } from 'react';
import { View, ScrollView, SafeAreaView, TextInput, Text, Picker, TouchableOpacity } from 'react-native';
import { CheckBox, Button } from 'react-native-elements'
import { color } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import HeaderComponent from '../../components/Header';
import AnexoFotos from '../../components/Picture';

import styles from './styles';

export default function ReportFraud() {
    const [selectedValue, setSelectedValue] = useState("Urbano");
    
    const navigation = useNavigation();

    function handleNavigationBack(){
        navigation.goBack();
    }
    
    return (
        <ScrollView>
            <HeaderComponent/>            
            <View style={styles.principal}>

                <Text>*Campos Obrigatórios</Text>
                <View style={styles.card}>
                    <Text style={styles.tituloCard}>Denuncia de Fraude</Text>
                    <Text>Informar supostos furtos de energia
                    (GATOS) ou irregularidades na instalação
                    elétrica: ligações clandestinas,ligações
                    diretas na rede, ponte (nos bornes do
                    medidor), fase desconectada, etc.
                </Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.tituloCard}>Dados da Denúncia</Text>

                    <Text>Local da Denúncia</Text>
                    <TextInput style={styles.inputText}></TextInput>

                    <Text>Número *</Text>
                    <TextInput style={styles.inputText}></TextInput>

                    <Text>Local da Denúncia</Text>
                    <TextInput style={styles.inputText}></TextInput>

                    <Text>Complemento do Endereço</Text>
                    <TextInput style={styles.inputText}></TextInput>

                    <Text>Bairro</Text>
                    <TextInput style={styles.inputText}></TextInput>

                    <Text>Município *</Text>
                    <TextInput style={styles.inputText}></TextInput>

                    <Text>Estado *</Text>
                    <TextInput style={styles.inputText}></TextInput>

                    <Text>Tipo de Endereço *</Text>
                    <Picker
                        selectedValue={selectedValue}
                        style={styles.inputText}
                        Text="Teste"
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                        <Picker.Item label="Rural" value="rural" />
                        <Picker.Item label="Urbano" value="urbano" />
                    </Picker>

                    <Text>Ponto de Referência
                (Máximo: 1500 caracteres)</Text>
                    <TextInput style={styles.inputTextArea}></TextInput>

                    <Text>Descreva detalhadamente de que forma é praticada a irregularidade *
                (Máximo: 3000 caracteres)</Text>
                    <TextInput style={styles.inputTextArea}></TextInput>
                </View>

                <View style={styles.card}>
                    <Text style={styles.tituloCard}>Fotos da ocorrência</Text>

                    <Text>Se desejar, anexe foto(s) da ocorrência
                    Notas:
                    * O tamanho total dos anexos não pode ultrapassar 9Mb e permite as extensões jpg, jpeg, png, bmp, gif, doc, docx e pdf.
                </Text>
                    <AnexoFotos/>
                    <Button title="Tirar foto com a Camera" titleStyle={styles.caixaFotoTexto} type="outline" buttonStyle={styles.caixaFotoAnexo} />
                </View>

                <View style={styles.card}>
                    <Text style={styles.tituloCard}>Dados do Solicitante *</Text>

                    <CheckBox
                        title='Quero fazer uma denúncia anônima.'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={true}
                        containerStyle={styles.containerRadio}
                    />
                    <CheckBox
                        title='Quero me identificar para que a distribuidora de energia possa entrar em contato comigo, caso necessário.'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={false}
                        containerStyle={styles.containerRadio}
                    />
                </View>

                <View style={styles.containerFinal}>
                    <View style={styles.divBotaoFinal}>
                        <Button buttonStyle={styles.botaoFinal} title="Voltar" onPress = {handleNavigationBack}/>
                    </View>
                    <View style={styles.divBotaoFinal}>
                        <Button buttonStyle={styles.botaoFinalDois} title="Enviar" titleStyle={styles.fontBotaoFinalDois}/>
                    </View>
                </View>

            </View>
        </ScrollView >
    )
}