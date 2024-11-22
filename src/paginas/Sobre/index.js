import React from "react";
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

import Cabecalho from "../../componentes/cabecalho";
import Rodape from "../../componentes/rodape";

export default function Sobre(){
    
  return(
    <View style={{ flex: 1 }}>
      <Cabecalho/>
      <View style={styles.Feed}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.Titulo}>Sobre</Text>
        
              <View style={styles.ContainerFeed}>
              <Image source={require('../../assets/programacao.jpg')} style={styles.Imgfeed} />
              <Text style={styles.Textofeed}>Reunião de requisitos do projeto</Text>
              </View>

              <View style={styles.ContainerFeed}>
              <Image source={require('../../assets/reuniao.png')} style={styles.Imgfeed} />
              <Text style={styles.Textofeed}>Reunião para elaboração de estrategias no ambito saude no combate a raiva</Text>
              </View>
          </ScrollView>
        </View>
      <Rodape/>
    </View>
  )
}
const styles = StyleSheet.create({
    Feed: {
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
    ContainerFeed:{
      marginBottom:30,
      width:350,
      height:300,
    },
    Imgfeed:{
      padding:50,
      height:200,
      width:350,
      borderRadius:15
    },
    Textofeed:{
      padding:10,
      fontSize:25,
      color:'black'
    }
})