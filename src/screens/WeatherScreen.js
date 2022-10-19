import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

const WeatherScreen = () => {

  const [ciudad, setCiudad] = useState('Puebla');
  const [pais, setPais] = useState('Mexico');
  const [temperatura, setTemperatura] = useState(20);
  const [clima, setClima] = useState('Parcialmente nublado');
  const [vientovel, setVientovel] = useState(17);
    
  return (
    <ImageBackground 
      style= { styles.contenedor }
      source={{ uri: 'https://i.pinimg.com/564x/a5/36/da/a536dada48e9ea082ace014a4015c1af.jpg' }}
    >
      <Text style={ styles.ciudad }>{ ciudad }, { pais }</Text>
      <Text style={ styles.temperatura }>{ temperatura }°c</Text>
      <Image
        source={{ uri: 'https://cdn.weatherapi.com/weather/64x64/day/116.png' }}
        style={ styles.imagen }
        />
      <Text>{ clima }</Text>
      <FontAwesome5 
        name="wind" 
        size={24} 
        color="white" 
        style={ styles.viento }
      />
      <Text>{ vientovel }Km/h</Text>
    </ImageBackground>
  )
}

export default WeatherScreen;

const styles = StyleSheet.create({
  'contenedor' : {
    flex:1, 
    backgroundColor: 'gray', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  'temperatura': {
    fontSize: 100,
    color: 'white',
  },
  'ciudad' : {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  'imagen' : {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  'viento' : {
    marginBottom: 10,
    marginTop: 10,
  }
})