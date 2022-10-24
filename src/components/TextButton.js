import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const TextButton = ( { funct, text = 'Presiona aquí', text_c, bgc='red', width='50%', mgh=2, mgv=2, pdv=0, pdh=0 } ) => {
    // text -> Texto del botón (requerido)
    // text_c -> Color del texto (requerido)
    // width -> ancho del boton en pixeles o porcentaje (opcional)
    // bgc -> color de fondo dle botón (opcional)
    // mgh -> margen horizontal (opcional)
    // mgv -> margen vertical (opcional)
    // pdh -> padding horizontal (opcional)
    // pdv -> padding vertical (opcional)

    return (
        <TouchableOpacity
            style={{
                width: width,
                marginHorizontal: mgh,
                marginVertical: mgv,
                backgroundColor: bgc,
                borderRadius: 5,
                alignItems: 'center',
                paddingVertical: pdv,
                paddingHorizontal: pdh,
            }}
            onPress={ funct }
        >
            <Text style={{
                alignItems: 'center',
                color: text_c,
            }}>
                { text }
            </Text>
        </TouchableOpacity>
    )
}

export default TextButton;
