import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Perguntas from './src/paginas/perguntas';
import Pesquisar from './src/paginas/pesquisar';
import Conta from './src/paginas/conta';
import Sobre from './src/paginas/Sobre';
import Duvidas from './src/paginas/Duvidas';
import Creditos from './src/paginas/creditos';
import Configuracoes from './src/paginas/configuracoes';


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
          options={{ headerShown: false }}
        />
        
        <Stack.Screen 
            name="Conta" 
            component={Conta} 
            options={{ headerShown: false }}
          />

        <Stack.Screen 
            name="Sobre" 
            component={Sobre} 
            options={{ headerShown: false }} 
          />

        <Stack.Screen 
          name="Duvidas" 
          component={Duvidas} 
          options={{ headerShown: false }}
          />
        
        <Stack.Screen 
            name="Creditos" 
            component={Creditos} 
            options={{ headerShown: false }}
          />

        <Stack.Screen 
            name="Configuracoes" 
            component={Configuracoes} 
            options={{ headerShown: false }} 
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
