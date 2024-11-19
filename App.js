import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Perguntas from './src/paginas/perguntas';
import Pesquisar from './src/paginas/pesquisar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Perguntas" 
          component={Perguntas} 
          options={{ headerShown: false }} // Desativa o cabeçalho para a tela Perguntas
        />
        <Stack.Screen 
          name="Pesquisar" 
          component={Pesquisar} 
          options={{ headerShown: false }} // Desativa o cabeçalho para a tela Pesquisar
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
