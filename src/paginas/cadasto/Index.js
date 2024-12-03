import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image, TextInput, ScrollView } from 'react-native';

class Cadastro extends Component{
  render(){
    return(
    <View style={{flex:1}}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.Topo}>
        <Image
        source={require('./src/assets/Logo.png')}
        style={styles.Img}/>
      </View>

      
      <View style={styles.Cadastro}>

        <Text style={styles.Titulo}>Cadastro</Text>
        <TextInput style={styles.Entrada} placeholder="Nome"/>
        <TextInput style={styles.Entrada} placeholder="Sobrenome"/>
        <TextInput style={styles.Entrada} placeholder="Email"/>
        <TextInput style={styles.Entrada} placeholder="Senha"/>
        <TextInput style={styles.Entrada} placeholder="Confirmar senha"/>

        <TouchableOpacity style={styles.Botao}>
          <View style={styles.BtnArea}>
            <Text style={styles.BtnTexto}>Entrar</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <Text style={styles.Link}>Já possui cadastro ?</Text>
        </TouchableOpacity>
        
      </View>
      </ScrollView>
    </View>
  );
}

} 

const styles = StyleSheet.create({
  Topo:{
    height:200,
    alignItems:'center',
  },
  Img:{
    width:200,
    height:200,
  },
  Cadastro:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',  
  },
  Titulo: {
    fontSize: 24,
    fontWeight:'bold',
    padding: 30,
    color:'black'
  },
  Entrada:{
    width:300,
    height:50,
    borderWidth:1,
    borderColor:'black',
    borderRadius:15,
    margin:6
  },
  Botao:{
    width:250,
    height:50,
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
    justifyContent:'center',
    alignItems:'center'
  },
  BtnTexto:{
    fontSize:18,
    fontWeight:'bold',
    color:'white'
  },
  Link:{
    fontSize:15,
    color:'blue',
    margin:8,
    fontStyle:'italic',
    textAlign:'center',
  }
 
});

export default Cadastro;