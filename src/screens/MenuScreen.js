import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const MenuScreen = ( {navigation} ) => {
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
        </View>
    );
}

export default MenuScreen;

const styles = StyleSheet.create({})