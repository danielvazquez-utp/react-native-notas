import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const IconButton = ( { funct, text = 'Presiona aquí', text_c, bgc='red', width='50%', icon_n='home', icon_s=24, icon_c='black', icon_f='FontAwesome', mgh=2, mgv=2, pdv=0, pdh=0 } ) => {
    // text -> Texto del botón (requerido)
    // text_c -> Color del texto (requerido)
    // icon_n -> nombre del icono (opcional)
    // icon_s -> tamaño del icono (opcional)
    // icon_c -> color del icono (opcional)
    // icon_f -> Familia de iconografía
    // width -> ancho del boton en pixeles o porcentaje (opcional)
    // height -> alto del botón en pixeles o porcentaje (opcional)
    // bgc -> color de fondo dle botón (opcional)

    const familiaIconos = (icon_f) => {
        if(icon_f=='FontAwesome'){
          return (
            <FontAwesome name={ icon_n } size={ icon_s } color={ icon_c } />
          );
        }
    
        if(icon_f=='FontAwesome5'){
          return (
            <FontAwesome5 name={ icon_n } size={ icon_s } color={ icon_c } />
          );
        }
    
        if(icon_f=='MaterialIcons'){
          return (
            <MaterialIcons name={ icon_n } size={ icon_s } color={ icon_c } />
          );
        }
    
        if(icon_f=='Fontisto'){
          return (
            <Fontisto name={ icon_n } size={ icon_s } color={ icon_c } />
          );
        }
    
    }

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
            { familiaIconos(icon_f) }
            <Text style={{
                alignItems: 'center',
                color: text_c,
            }}>
                { text }
            </Text>
        </TouchableOpacity>
    )
}

export default IconButton;
