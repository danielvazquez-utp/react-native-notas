import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Alert } from 'react-native-web';
import IconButton from '../components/IconButton';
import TextButton from '../components/TextButton';

const ButtonScreen = ( {navigation} ) => {
  
  const mensaje = () => {
    alert('Hola');
  }

  const irClima = () => { navigation.navigate('Weather') }
  const irImagenes = () => { navigation.navigate('Image') }
  const irMenu = () => { navigation.navigate('Menu') }

  return (
    <View style={styles.contenedor}>
      
      <IconButton 
        text='El clima de hoy'
        bgc='dodgerblue'
        icon_f='FontAwesome5'
        icon_c='white'
        icon_n='cloud-sun'
        text_c='white'
        pdv={5}
        funct = {irClima}
      />
      <IconButton 
        text='Imagen al azar'
        bgc='darkgreen'
        icon_f='FontAwesome5'
        icon_c='white'
        icon_n='random'
        text_c='white'
        width='90%'
        pdv={5}
        funct = {irImagenes}
      />
      <IconButton 
        text='Ir al Menú'
        bgc='navy'
        icon_f='FontAwesome5'
        icon_c='white'
        icon_n='home'
        text_c='white'
        width='90%'
        pdv={5}
        funct = {irMenu}
      />

      <TextButton
        text='Aceptar'
        text_c='darkred'
        bgc='gold'
        pdv={10}
      />

    </View>
  )
}

export default ButtonScreen;

const styles = StyleSheet.create({
  'contenedor': {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})