import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps'


const Map = () => {
  return (
    <View style={styles.container}>
      
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
      title={"Localização do Cliente"}/>
    </MapView>
   </View>
  )
}

const styles = StyleSheet.create({
  
  container: {
  
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',

  },

  map: {

    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

  }
});
export default Map;