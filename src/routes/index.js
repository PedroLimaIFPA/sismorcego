import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Perguntas from '../paginas/perguntas/Index';
import Pesquisar from '../paginas/pesquisar/Index';


const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
      <Stack.Navigator>
        

        <Stack.Screen 
          name="Perguntas" 
          component={Perguntas} 
          options={{ headerShown: false }} // Desativa o cabeçalho para a tela Perguntas
        />

        <Stack.Screen 
          name="Pesquisar" 
          component={Pesquisar} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
}
