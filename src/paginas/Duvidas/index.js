import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import Cabecalho from '../../componentes/cabecalho';
import Rodape from '../../componentes/rodape';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function Duvidas() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedId(expandedId === id ? null : id);
  };

  const duvidas = [
    { id: 1, titulo: 'Como tirar foto', resposta: 'Para tirar uma foto, clique no botão da câmera.' },
    { id: 2, titulo: 'Como recuperar senha?', resposta: 'Para recuperar sua senha, acesse a tela de recuperação.' },
    { id: 3, titulo: 'Gostaria de mudar de tema', resposta: 'Para mudar o tema, acesse as configurações.' },
  ];

  return (
    <View style={{ flex: 1 }}>
      <Cabecalho />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.Formulario}>
          <Text style={styles.Titulo}>Dúvidas</Text>
          {duvidas.map((duvida) => (
            <View key={duvida.id}>
              <TouchableOpacity style={styles.Botao} onPress={() => toggleExpand(duvida.id)}>
                <View style={styles.BtnArea}>
                  <Text style={styles.BtnTexto}>{duvida.titulo}</Text>
                </View>
              </TouchableOpacity>
              {expandedId === duvida.id && (
                <View style={styles.Resposta}>
                  <Text style={styles.RespostaTexto}>{duvida.resposta}</Text>
                </View>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
      <Rodape />
    </View>
  );
}

const styles = StyleSheet.create({
  Formulario: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
  },
  Titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 30,
    color: 'black',
  },
  Botao: {
    width: 350,
    height: 60,
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#8301d6',
    marginTop: 15,
  },
  BtnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 15,
  },
  BtnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  Resposta: {
    backgroundColor: '#e4d7f7',
    padding: 10,
    marginBottom: 8,
    marginTop:-12
  },
  RespostaTexto: {
    fontSize: 16,
    color: 'black',
  },
});
