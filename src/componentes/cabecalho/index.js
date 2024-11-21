import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Modal } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Cabecalho() {
  const navigation = useNavigation()

  // Usando useState para gerenciar o estado do modal
  const [modalVisible, setModalVisible] = useState(false);

  // Funções para abrir e fechar o modal
  const abrir_menu = () => {
    setModalVisible(true);
  };

  const fechar_menu = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.Header}>
      <View>
        <TouchableOpacity>
          <Image source={require('../../assets/Logomarca.png')} style={styles.Img} />
        </TouchableOpacity>
      </View>

      <Text style={styles.NomeLogo}>SISMORCEGO</Text>

      <View>
        <TouchableOpacity onPress={abrir_menu}>
          <Image source={require('../../assets/pedro.png')} style={styles.Perfil} />
        </TouchableOpacity>
      </View>

      <Modal transparent={true} animationType="slide" visible={modalVisible}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            onPress={fechar_menu}
            style={{ backgroundColor: 'red', height: 50, width: 50, alignItems: 'center', justifyContent: 'center' }}
          >
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>X</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnopcoes} onPress={()=> navigation.navigate('Conta')}>
            <Text style={styles.btnText}>Conta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnopcoes} onPress={()=> navigation.navigate('Sobre')}>
            <Text style={styles.btnText}>Sobre o projeto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnopcoes} onPress={()=> navigation.navigate('Duvidas')}>
            <Text style={styles.btnText}>Dúvidas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnopcoes} onPress={()=> navigation.navigate('Creditos')}>
            <Text style={styles.btnText}>Créditos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnopcoes} onPress={()=> navigation.navigate('Configuracoes')}>
            <Text style={styles.btnText}>Configurações</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnopcoes}>
            <Text style={styles.btnText}>Sair</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {
    height: 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#000',
    borderBottomWidth: 2,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 10,
  },
  Img: {
    width: 70,
    height: 60,
  },
  NomeLogo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  Perfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: '#20033b',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#20035b',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  btnopcoes: {
    width: 300,
    height: 80,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 1,
    borderColor: '#1025',
    borderWidth: 0.8,
  },
  btnText: {
    color: '#111',
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'flex-end',
  },
});
