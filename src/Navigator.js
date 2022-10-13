import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Login( {navigation} ) {
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
                onPress = { () => navigation.navigate('MenuScreen') }
            >
                <Text>
                    Ir a Menú principal
                </Text>
            </TouchableOpacity>
            
        
        </View>
    );
}

function Menu( {navigation} ) {
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
                onPress = { () => navigation.navigate('AlumnoScreen') }
            >
                <Text>
                    Ir a Alumno
                </Text>
            </TouchableOpacity>
        </View>
    );
}

function Alumno( {navigation} ) {
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
            onPress={() => navigation.navigate('LoginScreen')}
        />
        </View>
    );
}


const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AlumnoScreen" component={Alumno} options={{ title: 'Alumnos' }} />
        <Stack.Screen name="MenuScreen" component={Menu} options={{ title: 'Menú principal' }} />
        <Stack.Screen name="LoginScreen" component={Login} options={{ title: 'Inicio de sesión' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator