import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import Cabecalho from "../../componentes/cabecalho";
import Rodape from "../../componentes/rodape";

export default function Configuracoes(){
    
  return(
    <View style={{ flex: 1 }}>
      <Cabecalho/>
        <View style={styles.feed}>
          
          <Text style={styles.Titulo}>Configurações</Text>
            
            <TouchableOpacity style={styles.Botao}>
                <View style={styles.BtnArea}>
                    <Text style={styles.BtnTexto}>Obter</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Botao}>
                <View style={styles.BtnArea}>
                    <Text style={styles.BtnTexto}>Notificações:Sim</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Botao}>
                <View style={styles.BtnArea}>
                    <Text style={styles.BtnTexto}>- Fonte: 10 +</Text>
                </View>
            </TouchableOpacity>
            

        </View>
      <Rodape/>
    </View>
  )
}

const styles = StyleSheet.create({
  feed: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'flex-start',
    marginBottom: 100,
  },
  Titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 30,
    textAlign:'center',
    color:'black'
  },
    FeedContainer:{
    width:400,
    height:300,
    backgroundColor:'#725468'
  },
  Imgfeed:{
      padding:50,
      height:250,
      width:300
  },
  Textofeed:{
    fontSize:15,  
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
  }
})