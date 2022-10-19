import React from 'react';
import { View, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './screens/LoginScreen';
import MenuScreen from './screens/MenuScreen';
import StudentScreen from './screens/StudentScreen';
import ImageScreen from './screens/ImageScreen';

import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <NavigationContainer>

      <Tab.Navigator>
        <Tab.Screen
          name="Alumno"
          component={StudentScreen}
          options={{ 
            title: 'Alumnos',
            tabBarIcon: () => (
              <FontAwesome5 name="users" size={24} color="black" />
            ),
          }} 
        />
        <Tab.Screen
          name="Menu"
          component={MenuScreen}
          options={{ 
            tabBarLabel: 'Menú principal',
            tabBarIcon: () => (
              <FontAwesome5 name="th-list" size={24} color="black" />
            ),
          }} 
        />
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Inicio de sesión',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
            tabBarIcon: () => (
              <FontAwesome5 name="user-alt" size={24} color="black" />
            ),
            }} 
        />

        <Tab.Screen
          name="Image"
          component={ImageScreen}
          options={{
            title: 'Imagen al azar',
            headerStyle: {
              backgroundColor: 'purple',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
            tabBarIcon: () => (
              <FontAwesome5 name="random" size={24} color="black" />
            ),
            }} 
        />

      </Tab.Navigator>

    </NavigationContainer>
  )
}

export default HomeTab;