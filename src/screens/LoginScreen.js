import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const LoginScreen = ( {navigation} ) => {
  return (
    <View 
            style={{ 
                flex:1, 
                backgroundColor: 'yellow', 
                alignItems: 'center', 
                justifyContent: 'center' 
            }}
        >
        <Text>Formulario de logeo</Text>
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
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})