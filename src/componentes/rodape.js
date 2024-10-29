// Rodapé.js
import React from 'react';
import { View, StyleSheet,TouchableOpacity, Image, Text } from 'react-native';

const Rodape = () => {
  return (
    <View style={styles.Footer}>
      
      

      <TouchableOpacity>
        <View>
        <Image 
        source={require('../assets/Banco_de_dados.png')} 
        style={styles.Img} 
      />
          </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View>
        <Image 
        source={require('../assets/inserir_branco.png')} 
        style={styles.Img} 
      />
          </View>
      </TouchableOpacity>
    
    </View>
  );
};

const styles = StyleSheet.create({
  Footer: {
    height: 65,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopColor: '#000',
    borderTopWidth: 2,
    backgroundColor: '#20033b',
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
    color: '#fff',
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