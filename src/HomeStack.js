import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import MenuScreen from './screens/MenuScreen';
import StudentScreen from './screens/StudentScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Alumno" component={StudentScreen} options={{ title: 'Alumnos' }} />
        <Stack.Screen name="Menu" component={MenuScreen} options={{ title: 'Menú principal' }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Inicio de sesión' }} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default HomeStack;