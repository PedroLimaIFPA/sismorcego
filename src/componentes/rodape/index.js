import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Keyboard, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Rodape() {
  const navigation = useNavigation();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    !isKeyboardVisible && (
      <View style={styles.Footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Pesquisar')}>
          <Image 
            source={require('../../assets/Banco_de_dados.png')} 
            style={styles.Img}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Perguntas')}>
          <Image 
            source={require('../../assets/inserir_branco.png')} 
            style={styles.Img}
          />
        </TouchableOpacity>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  Footer: {
    height: 65,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
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
});
