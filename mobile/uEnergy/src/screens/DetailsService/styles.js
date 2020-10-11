import { StyleSheet } from 'react-native';
import { ScreenStackHeaderRightView } from 'react-native-screens';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#F4F6F7",
      },

      button: {
        marginTop: 10,
        height: 60,
        borderRadius: 5,
        backgroundColor: "#FBC16F",
        width: "98%"
      },

      text: {
        color: "#00AFAA",
        fontSize: 19.2,
        paddingBottom: 15,
      },
      
      divIcon:{
        flex: 1,
        flexDirection: 'column',
        right: 0,  
        marginLeft: 'auto'
      },
      containerIcon: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',      
        justifyContent: "space-around",
      },
      mainText: {
        padding: 24,
      }
})