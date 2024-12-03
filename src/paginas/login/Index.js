import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image, TextInput } from 'react-native';

class Login extends Component{
  render(){
    return(
    <View style={{flex:1}}>
   
      <View style={styles.Topo}>
        <Image
        source={require('./src/assets/Logo.png')}
        style={styles.Img}/>
      </View>

      <View style={styles.Login}>

        <Text style={styles.Titulo}>Login</Text>
        <TextInput style={styles.Entrada} placeholder="Email"/>
        <TextInput style={styles.Entrada} placeholder="Senha"/>

        <TouchableOpacity style={styles.Botao}>
          <View style={styles.BtnArea}>
            <Text style={styles.BtnTexto}>Entrar</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <Text style={styles.Link}>Não possui cadastro ?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Botao}>
          <View style={styles.BtnArea}>
            <Text style={styles.BtnTexto}>Criar conta</Text>
          </View>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

} 

const styles = StyleSheet.create({
  Topo:{
    height:100,
    alignItems:'center',
    justifyContent:'center',
  },
  Img:{
    width:200,
    height:200,
    marginTop:100
  },
  Login:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    color:'black'  
  },
  Titulo:{
    fontSize:50,
    fontWeight:'bold',
    padding:30,
  },
  Entrada:{
    width:300,
    height:50,
    borderWidth:1,
    borderColor:'black',
    borderRadius:15,
    margin:15
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
    margin:10,
    fontStyle:'italic',
    textAlign:'center',
  }
 
});

export default Login;