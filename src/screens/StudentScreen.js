import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const StudentScreen = ( {navigation} ) => {
    return (
        <View 
            style={{ 
                flex:1, 
                backgroundColor: 'green', 
                alignItems: 'center', 
                justifyContent: 'center' 
            }}
        >
        <Text>Evaluación de alumno</Text>
        <Button
            title="Ir a inicio de sesión"
            onPress={() => navigation.navigate('Login')}
        />
        </View>
    );
}

export default StudentScreen

const styles = StyleSheet.create({})