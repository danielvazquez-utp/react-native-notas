import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
    return (
        <View style={ styles.contenedor }>
            <Text>Hola mundo desde ./src/App.js</Text>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    'contenedor' : {
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: 'center',
        justifyContent: 'center',
    }
});