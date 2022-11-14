import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import TextBox from '../components/TextBox';
import TextButton from '../components/TextButton';

const LoginScreen = ( {navigation} ) => {

  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  
  const handleLogin = async () => {
    const url = 'https://webservice1.danielvazquezut.repl.co/setUser.php';
    console.log('Usuario: ' + usuario);
    console.log('Contraseña: ' + contrasena);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }

  return (
    <ImageBackground 
            style={{ 
                flex:1, 
                backgroundColor: 'yellow', 
                alignItems: 'center', 
                justifyContent: 'center',
                
            }}
            source={ require('../../assets/bg-0.png') }
        >
        <Text
          style={{ fontSize:20 }}
        >
          Inicio de sesión
        </Text>
        <TextBox
            place='Correo electrónico'
            pv={10}
            ph={5}
            value={ usuario }
            onChangeT={ setUsuario }
        />
        <TextBox
            place='Contraseña'
            pv={10}
            ph={5}
            pass={true}
            value={ contrasena }
            onChangeT={ setContrasena }
            mv={5}
        />

        <TextButton
          text='Iniciar sesión'
          bgc='navy'
          width='90%'
          text_c='white'
          mgv={10}
          pdv={10}
          funct={ handleLogin }
        />

        <TouchableOpacity
            style={{
                backgroundColor: 'gray',
            }}
            onPress = { () => navigation.navigate('Menu') }
        >
            <Text>
                Ir a Menú principal
            </Text>
        </TouchableOpacity>
    </ImageBackground>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})