import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

import Cabecalho from "../../componentes/cabecalho";
import Rodape from "../../componentes/rodape";

export default function Creditos() {
  return (
    <View style={{ flex: 1 }}>
      <Cabecalho />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.feed}>
          <Text style={styles.Titulo}>Créditos</Text>

          {/* Pedro Dimas */}
          <View style={styles.ItemContainer}>
            <Image source={require('../../assets/pedro.png')} style={styles.Imgfeed} />
            <View style={styles.TextContainer}>
              <Text style={styles.NomeTexto}>Nome: Pedro Dimas</Text>
              <Text style={styles.FuncaoTexto}>Função: Desenvolvedor</Text>
            </View>
          </View>

          {/* Liander Vinicius */}
          <View style={styles.ItemContainer}>
            <Image source={require('../../assets/liander.png')} style={styles.Imgfeed} />
            <View style={styles.TextContainer}>
              <Text style={styles.NomeTexto}>Nome: Liander Vinicius</Text>
              <Text style={styles.FuncaoTexto}>Função: Desenvolvedor</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <Rodape />
    </View>
  );
}

const styles = StyleSheet.create({
  feed: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 80,
  },
  Titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 30,
    color: 'black',
  },
  ItemContainer: {
    flexDirection: 'row', // Coloca os elementos lado a lado
    alignItems: 'center', // Alinha verticalmente no centro
    backgroundColor: '#8301d6',
    borderTopLeftRadius:50,
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50,
    padding: 10,
    marginBottom: 20,
    width: '90%',
  },
  Imgfeed: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginRight: 15, // Espaçamento entre a imagem e os textos
  },
  TextContainer: {
    flex: 1, // Permite que o texto ocupe o espaço restante
  },
  NomeTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  FuncaoTexto: {
    fontSize: 16,
    color: 'white',
  },
});
