import { StyleSheet } from 'react-native';
import { block } from 'react-native-reanimated';

export default StyleSheet.create({
    card: {
      flex: 1,
      paddingLeft: 20,
      paddingTop: 10,
      paddingRight: 20,
      paddingBottom:20,
      marginTop: 20,
      backgroundColor: "#FFFFFF",
      borderWidth: 2,
      borderRadius: 5,
      borderColor: "#F2F2F2",
      shadowOffset: {
        width: 5,
        height: 6,
      },
      shadowColor: "#E5E5E5",
      textAlign: "left",
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
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 7,
        paddingHorizontal: 24,
        fontSize: 16,
        height: 60,
    },
    inputTextArea: {
      borderWidth: 1,
      borderColor: "#CCCCCC",
      height: 100,
      borderRadius: 5,
      marginTop: 10,
    },
    caixaFotoAnexo: {
      borderWidth: 2,
      borderColor: "#00AFAA",
      marginTop: 5,
      borderStyle: "dashed",
      borderRadius: 5,
      height: 60
    },
    caixaFotoTexto:{
      color: "#00AFAA"
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
    }
  });