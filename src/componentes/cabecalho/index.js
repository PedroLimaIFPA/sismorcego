import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Modal, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Cabecalho() {
  const navigation = useNavigation();

  // Usando useState para gerenciar o estado do modal
  const [modalVisible, setModalVisible] = useState(false);

  // Usando useRef para criar uma animação
  const slideAnim = useRef(new Animated.Value(300)).current; // Inicia fora da tela

  // Funções para abrir e fechar o modal com animação
  const abrir_menu = () => {
    setModalVisible(true); // Torna o modal visível
    Animated.spring(slideAnim, {
      toValue: 0, // Desliza o modal para dentro da tela
      useNativeDriver: true, // Usa animação nativa para melhor desempenho
    }).start();
  };

  const fechar_menu = () => {
    Animated.spring(slideAnim, {
      toValue: 300, // Move o modal de volta para fora da tela
      useNativeDriver: true,
    }).start(() => setModalVisible(false)); // Depois de fechar, oculta o modal
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

      <Modal transparent={true} animationType="none" visible={modalVisible}>
        <View style={styles.modalContainer}>
          <Animated.View
            style={[
              styles.drawerContent,
              {
                transform: [{ translateX: slideAnim }], // Anima a posição do modal
              },
            ]}
          >
            <TouchableOpacity
              onPress={fechar_menu}
              style={styles.closeButton}
            >
              <Text style={styles.closeText}>X</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnopcoes} onPress={() => navigation.navigate('Conta')}>
              <Text style={styles.btnText}>Conta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnopcoes} onPress={() => navigation.navigate('Sobre')}>
              <Text style={styles.btnText}>Sobre o projeto</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnopcoes} onPress={() => navigation.navigate('Duvidas')}>
              <Text style={styles.btnText}>Dúvidas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnopcoes} onPress={() => navigation.navigate('Creditos')}>
              <Text style={styles.btnText}>Créditos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnopcoes} onPress={() => navigation.navigate('Configuracoes')}>
              <Text style={styles.btnText}>Configurações</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnopcoes}>
              <Text style={styles.btnText}>Sair</Text>
            </TouchableOpacity>
          </Animated.View>
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
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Cor de fundo semitransparente
    justifyContent: 'flex-start',
    alignItems: 'flex-end', // Alinha o modal à direita
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 20, // Alinha o botão de fechar à direita
    backgroundColor: 'red',
    borderRadius: 5,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },  
  closeText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  drawerContent: {
    flex: 1,
    backgroundColor: '#20035b', // Cor de fundo do Drawer
    width: 250, // Largura do Drawer
    paddingTop: 50,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
  },
  btnopcoes: {
    height: 60,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:15,
    marginVertical: 5,
    borderRadius: 5,
  },
  btnText: {
    color: '#111',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
