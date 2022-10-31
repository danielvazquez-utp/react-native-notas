import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const TextBox = ({ c='gray', w='90%', mv=2, mh=2, pv=1, ph=1, bdc='#AAA', bgc='#FFF', place='Escribir aquí', value='', onChangeT } ) => {
  return (
    <TextInput
        style = {{
            width: w,
            marginVertical: mv,
            marginHorizontal: mh,
            paddingVertical: pv,
            paddingHorizontal: ph,
            backgroundColor: bgc,
            borderRadius: 5,
            borderColor: bdc,
            borderWidth: 1,
            color:c,
        }}
        placeholder={ place }
        value={ value }
        onChangeText= { onChangeT }
    />
  )
}

export default TextBox;