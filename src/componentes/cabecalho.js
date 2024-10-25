// Cabeçalho.js
import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const Cabeçalho = () => {
  return (
    <View style={styles.Header}>
      <Image 
        source={require('./src/assets/Logomarca.png')} 
        style={styles.Img} 
      />
      <Text style={styles.NomeLogo}>SISMORCEGO</Text>
      <Image 
        source={require('./src/assets/pedro.png')} 
        style={styles.Perfil} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    height: 65,
    flexDirection: "row",
    justifyContent: "space-between", // Alinhando logo e perfil nas extremidades
    alignItems: "center",
    borderBottomColor: '#000',
    borderBottomWidth: 2,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 10, // Espaçamento nas laterais
  },
  Img: {
    width: 70,
    height: 60,
  },
  NomeLogo: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#000',
  },
  Perfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: '#000',
  }
});

export default Cabeçalho;
