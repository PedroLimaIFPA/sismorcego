import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Cabecalho from "../../componentes/cabecalho";
import Rodape from "../../componentes/rodape";

export default function Configuracoes() {
  const [fontSize, setFontSize] = useState(10); // Estado inicial para o tamanho da fonte

  const increaseFont = () => {
    setFontSize((prev) => Math.min(prev + 1, 30)); // Limite máximo para o tamanho da fonte
  };

  const decreaseFont = () => {
    setFontSize((prev) => Math.max(prev - 1, 10)); // Limite mínimo para o tamanho da fonte
  };

  return (
    <View style={{ flex: 1 }}>
      <Cabecalho />
      <View style={styles.feed}>
        <Text style={styles.Titulo}>Configurações</Text>

        <TouchableOpacity style={styles.Botao}>
          <View style={styles.BtnArea}>
            <Text style={styles.BtnTexto}>Modo escuro: Não</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Botao}>
          <View style={styles.BtnArea}>
            <Text style={styles.BtnTexto}>Notificações: Sim</Text>
          </View>
        </TouchableOpacity>

        {/* Botões de controle de fonte dentro de uma View estilizada */}
        <View style={styles.Botao}>
          <View style={styles.BtnArea}>
            <TouchableOpacity onPress={decreaseFont} style={styles.FontButton}>
              <Text style={styles.BtnTexto}>-</Text>
            </TouchableOpacity>

            <Text style={[styles.BtnTexto, { fontSize, marginHorizontal: 10 }]}>
              {fontSize}
            </Text>

            <TouchableOpacity onPress={increaseFont} style={styles.FontButton}>
              <Text style={styles.BtnTexto}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Rodape />
    </View>
  );
}

const styles = StyleSheet.create({
  feed: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 100,
  },
  Titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 30,
    textAlign: 'center',
    color: 'black',
  },
  Botao: {
    width: 250,
    height: 50,
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#8301d6',
    margin: 8,
  },
  BtnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BtnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  FontButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8301d6',
    borderRadius: 10,
  },
});
