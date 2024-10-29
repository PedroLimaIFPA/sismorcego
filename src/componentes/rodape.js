// Rodapé.js
import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const Rodape = () => {
  return (
    <View style={styles.Footer}>
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
  Footer: {
    height: 65,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopColor: '#000',
    borderTopWidth: 2,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
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

export default Rodape;
