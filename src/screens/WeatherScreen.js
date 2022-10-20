import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

const WeatherScreen = () => {

  const [ciudad, setCiudad] = useState('Puebla');
  const [pais, setPais] = useState('Mexico');
  const [temperatura, setTemperatura] = useState(20);
  const [clima, setClima] = useState('Parcialmente nublado');
  const [vientovel, setVientovel] = useState(17);
  const [icono, setIcono] = useState('//cdn.weatherapi.com/weather/64x64/night/116.png');

  
  const getWeatherAsync = async () => {
    try {
      const apiKey = '7bd489b59b7847d8bcf191838221910';
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?q=${ ciudad }&key=${ apiKey }&lang=es`);
      const { current, location } = await response.json();
      // const { url } = data.images.original;
      // setUrlImage(url);
      setPais( location.country );
      setTemperatura( current.temp_c );
      setClima( current.condition.text );
      setIcono( current.condition.icon );
      setVientovel( current.wind_mph );
      setCiudad( location.name );
    } catch (error) {
        Alert.alert(error);
    }
  }

  useEffect(() => {
    // Realiza peticion a weatherapi.com sobre el clima en tiempo real
    getWeatherAsync();
  }, []);
    
  return (
    <ImageBackground 
      style= { styles.contenedor }
      source={{ uri: 'https://i.pinimg.com/564x/a5/36/da/a536dada48e9ea082ace014a4015c1af.jpg' }}
    >
      <Text style={ styles.ciudad }>{ ciudad }, { pais }</Text>
      <Text style={ styles.temperatura }>{ temperatura }°c</Text>
      <Image
        source={{ uri: `https:${ icono }` }}
        style={ styles.imagen }
        />
      <Text style={ styles.clima } >{ clima }</Text>
      <FontAwesome5 
        name="wind" 
        size={32} 
        color="white" 
        style={ styles.viento }
      />
      <Text style={ styles.clima } >{ vientovel }Km/h</Text>
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
    fontSize: 120,
    color: 'white',
  },
  'ciudad' : {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  'imagen' : {
    width: 75,
    height: 75,
    marginBottom: 10,
  },
  'viento' : {
    marginBottom: 10,
    marginTop: 10,
    fontWeight: 'bold',
  },
  'clima' : {
    fontWeight: 'bold',
  }
})