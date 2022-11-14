import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import IconButton from '../components/IconButton';

const MenuScreen = ( {navigation} ) => {

    const goLogin = () =>{
        navigation.navigate('Login');
    }

    return (
        <View 
            style={{ 
                flex:1, 
                backgroundColor: 'blue', 
                alignItems: 'center', 
                justifyContent: 'center' 
            }}
        >
            <Text>Menú principal</Text>
            <TouchableOpacity
                style={{
                    backgroundColor: 'gray',
                }}
                onPress = { () => navigation.navigate('Alumno') }
            >
                <Text>
                    Ir a Alumno
                </Text>
            </TouchableOpacity>

            <IconButton
                text='Login'
                funct={ goLogin }
            />

        </View>
    );
}

export default MenuScreen;

const styles = StyleSheet.create({})