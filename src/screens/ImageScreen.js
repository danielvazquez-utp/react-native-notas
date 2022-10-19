import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

const ImageScreen = () => {
    
    const [urlImage, setUrlImage] = useState('https://previews.123rf.com/images/imagevectors/imagevectors1606/imagevectors160600495/59163041-icono-de-la-c%C3%A1mara-blanca-en-el-bot%C3%B3n-negro-aislado-en-blanco.jpg');

    const getImageAsync = async () => {
        try {
            const apiKey = 'YyuNkAwWh2eZgAYHwvtHSQ8WUhGHiUrS';
            const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
            const { data } = await response.json();
            const { url } = data.images.original;
            setUrlImage(url);
        } catch (error) {
            Alert.alert(error);
        }
    }

    return (
        <View style={ styles.contenedor }>
        <Image
            source={{uri: urlImage}}
            style={ styles.imagen }
        />
        <Button
            title='Muestrame una imagen al azar'
            onPress={ () => getImageAsync() }
        />
        </View>
    )
}

export default ImageScreen

const styles = StyleSheet.create({
    'contenedor' : {
        flex:1, 
        backgroundColor: 'gray', 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    'imagen' : {
        width: 300,
        height: 300,
        marginBottom: 10,
    }
})