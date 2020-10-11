import { StyleSheet } from 'react-native';
import { block } from 'react-native-reanimated';

export default StyleSheet.create({
    card: {
      flex: 1,
      marginTop: 20,
      backgroundColor: "#FFFFFF",
      borderWidth: 2,
      borderRadius: 5,
      borderColor: "#F2F2F2",
      backgroundColor: "#00AFAA"
    },
    principal:{
      flex: 1,
      padding: 24, 
      backgroundColor: "#F4F6F7",
    },
    tituloCard:{
      color: "#fbc16f",
      fontSize: 19.2,
      paddingBottom: 15,
    },
    inputText: {
      borderWidth: 1,
      borderColor: "#CCCCCC",
      borderRadius: 5,
      height: 40,
      marginTop: 10,
      marginBottom: 5
    },
    inputTextArea: {
      borderWidth: 1,
      borderColor: "#CCCCCC",
      height: 100,
      borderRadius: 5,
      marginTop: 10,
    },
    caixaFotoAnexo: {
      borderWidth: 2.5,
      borderColor: "#00AFAA",
      borderStyle: "dashed",
      borderRadius: 5,
      height: 150
    },
    caixaFotoTexto:{
      color: "#FFFFFF",
      fontSize: 24,
      textAlign: "center"
    },
    divBotaoFinal:{
      flex: 1,
      
    },
    containerFinal: {
      flex: 1,
      flexDirection: 'row-reverse',
      alignItems: 'center',
    },
    botaoFinal: {
      marginTop: 10,
      height: 60,
      borderRadius: 5,
      backgroundColor: "#FBC16F",
      width: "98%"
    },
    botaoFinalDois: {
      marginTop: 10,
      height: 60,
      borderRadius: 5,
      borderColor: "#FBC16F",
      borderWidth: 1,
      backgroundColor: "#FFFFFF",
      width: "98%"
    },
    fontBotaoFinalDois: {
      color: "#FBC16F"
    },
    containerRadio: {
      backgroundColor: "#FFFFFF",
      borderColor: "#FFFFFF"
    }
  });