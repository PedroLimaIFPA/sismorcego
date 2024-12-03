import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';

import Cabecalho from "../../componentes/cabecalho";
import Rodape from "../../componentes/rodape";

export default function Conta() {
  return (
    <View style={{ flex: 1 }}>
      <Cabecalho />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.feed}>
          <Text style={styles.Titulo}>Conta</Text>

          <View style={styles.Fundoimgfeed}>
            <TouchableOpacity>
              <Image source={require('../../assets/pedro.png')} style={styles.Imgfeed} />
            </TouchableOpacity>
          </View>

          <View style={styles.FeedContainer}>
            <Text style={styles.Textofeed}>Nome do Usuário</Text>
            <TextInput style={styles.Entrada} placeholder="Fulano de tal" />

            <Text style={styles.Textofeed}>Email</Text>
            <TextInput style={styles.Entrada} placeholder="Ful****@gmail.com" />

            <Text style={styles.Textofeed}>Senha</Text>
            <TextInput style={styles.Entrada} placeholder="******" secureTextEntry={true} />

            <Text style={styles.Textofeed}>Confirmar Senha</Text>
            <TextInput style={styles.Entrada} placeholder="******" secureTextEntry={true} />
          </View>

          <TouchableOpacity style={styles.Botao}>
            <View style={styles.BtnArea}>
              <Text style={styles.BtnTexto}>Atualizar</Text>
            </View>
          </TouchableOpacity>
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
  Fundoimgfeed: {
    backgroundColor: '#8301d6',
    borderRadius: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  Imgfeed: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  FeedContainer: {
    width: '80%',
    padding: 10,
  },
  Textofeed: {
    marginTop: 25,
    fontSize: 18,
    color: 'black',
  },
  Entrada: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  Botao:{
    width:350,
    height:60,
    borderWidth:1,
    borderTopLeftRadius:20,
    borderTopRightRadius:0,
    borderBottomLeftRadius:0,
    borderBottomRightRadius:20,
    backgroundColor:'#8301d6',
    margin:8
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
});
