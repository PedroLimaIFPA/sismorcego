import React from "react";
import {View, Text, StyleSheet} from 'react-native';

import Cabecalho from "../../componentes/cabecalho";
import Rodape from "../../componentes/rodape";

export default function Creditos(){
    
  return(
    <View style={{ flex: 1 }}>
      <Cabecalho/>
      <View style={styles.feed}>
        <Text style={styles.Titulo}>Créditos</Text>
        </View>

      <Rodape/>
    </View>
  )
}
const styles = StyleSheet.create({
  feed: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 100,
  },
  Titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 30,
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
    
  }
})