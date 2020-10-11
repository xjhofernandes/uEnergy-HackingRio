import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps'
import HeaderComponent from '../../components/Header'
import { useNavigation } from '@react-navigation/native';


export default function AvailableServicesMap(){
    const navigation = useNavigation();

    return (        
        <View style={styles.container}>
         <HeaderComponent/> 
        <MapView
         style={styles.map}
         loadingEnabled={true}
         region={{
         latitude: -22.9035,
         longitude: -43.2096,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
         }}
        >
          <MapView.Marker
          coordinate={{
            latitude: -22.9035,
            longitude: -43.2096
          }}
          title={"Ordem de Serviço 1"}
          onPress={() => {navigation.navigate('DetailsService')}}
          />

        </MapView>
       </View>
      )
}



const styles = StyleSheet.create({
  
  container: {
  
    flex: 1,
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end',

  },

  map: {

    position: 'absolute',
    top: 80,
    left: 0,
    right: 0,
    bottom: 0,

  }
});