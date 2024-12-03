import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, TextInput, TouchableOpacity, Platform } from 'react-native';
import Cabecalho from '../../componentes/cabecalho';
import Rodape from '../../componentes/rodape';

export default function Pesquisar () {

    return (
      <View style={{ flex: 1 }}>
        <Cabecalho />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.Formulario}>
              <Text style={styles.Titulo}>Lista de registro</Text>

              <TouchableOpacity style={styles.Botao} >
                <View style={styles.BtnArea}>
                  <Text style={styles.BtnTexto}>10.09.2024</Text>
                  <Text style={styles.BtnTexto}>Marituba</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.Botao} >
                <View style={styles.BtnArea}>
                  <Text style={styles.BtnTexto}>11.09.2024</Text>
                  <Text style={styles.BtnTexto}>Benevides</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.Botao} >
                <View style={styles.BtnArea}>
                  <Text style={styles.BtnTexto}>12.09.2024</Text>
                  <Text style={styles.BtnTexto}>Ananindeua</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.Botao} >
                <View style={styles.BtnArea}>
                  <Text style={styles.BtnTexto}>12.09.2024</Text>
                  <Text style={styles.BtnTexto}>Ananindeua</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.Botao} >
                <View style={styles.BtnArea}>
                  <Text style={styles.BtnTexto}>10.09.2024</Text>
                  <Text style={styles.BtnTexto}>Marituba</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.Botao} >
                <View style={styles.BtnArea}>
                  <Text style={styles.BtnTexto}>12.09.2024</Text>
                  <Text style={styles.BtnTexto}>Belém</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.Botao} >
                <View style={styles.BtnArea}>
                  <Text style={styles.BtnTexto}>10.09.2024</Text>
                  <Text style={styles.BtnTexto}>Belém</Text>
                </View>
              </TouchableOpacity>
              
            </View>
          </ScrollView>
        <Rodape/>
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
    fontWeight:'bold',
    padding: 30,
    color:'black'
  },
  Descricao: {
    marginTop: 10,
    width: 260,
    alignItems: 'flex-start',
    color:'#8301d6'
  },
  Entrada: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    margin: 6,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },Containerbotoes:{
    width:300,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
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
  BtnArea:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  BtnTexto:{
    fontSize:18,
    fontWeight:'bold',
    color:'white'
  }
});
