// App.js
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

// Importa o Cabecalho e o Rodape
import Cabecalho from './src/componentes/Cabecalho';
import Rodape from './src/componentes/Rodape';

class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Cabecalho />
        
        {/* Conteúdo do app pode ser inserido aqui */}
        
        <Rodape />
      </View>
    );
  }
}

export default App;
