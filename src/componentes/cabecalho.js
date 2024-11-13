// Cabeçalho.js
import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Modal } from 'react-native';

class Cabecalho extends Component {
  constructor(props){
    super(props);
    this.state={
      modalVisible:false
    };

    this.abrir_menu = this.abrir_menu.bind(this);
    this.fechar_menu = this.fechar_menu.bind(this);
  }
abrir_menu(){
this.setState({modalVisible: true})
}

fechar_menu(visible){
  this.setState({modalVisible: false})
  }
render() {
  return (
    <View style={styles.Header}>
      <View><TouchableOpacity><Image 
        source={require('../assets/Logomarca.png')} 
        style={styles.Img}/>
      </TouchableOpacity></View>

      <Text style={styles.NomeLogo}>SISMORCEGO</Text>
      
      <View><TouchableOpacity onPress={ this.abrir_menu }><Image 
        source={require('../assets/pedro.png')} 
        style={styles.Perfil}/> 
      </TouchableOpacity></View>

      <Modal transparent={true} animationType='slide'visible={this.state.modalVisible}>
        <View style={styles.Menu}>

          <View style={styles.Topo_Menu}>
            
            <Text>Menu de configurações</Text>
            

            
            <TouchableOpacity onPress={ this.fechar_menu} style={styles.BtnFechar}><Text>X</Text></TouchableOpacity>
            
          
          </View>

          <View style={styles.BtnContainer}>
          <TouchableOpacity><Text style={styles.TextBtn}>Conta</Text></TouchableOpacity>
          </View>

          <View style={styles.BtnContainer}>
          <TouchableOpacity><Text style={styles.TextBtn}>Sobre o projeto</Text></TouchableOpacity>
          </View>

          <View style={styles.BtnContainer}>
          <TouchableOpacity><Text style={styles.TextBtn}>Dúvidas</Text></TouchableOpacity>
          </View>

          <View style={styles.BtnContainer}>
          <TouchableOpacity><Text style={styles.TextBtn}>Creditos</Text></TouchableOpacity>
          </View>

          <View style={styles.BtnContainer}>
          <TouchableOpacity><Text style={styles.TextBtn}>Configurações</Text></TouchableOpacity>
          </View>

          <View style={styles.BtnContainer}>
          <TouchableOpacity><Text style={styles.TextBtn}>Sair</Text></TouchableOpacity>
          </View>

        </View>
      </Modal>

    </View>
  );
};
}
const styles = StyleSheet.create({
  Header: {
    height: 65,
    flexDirection: "row",
    justifyContent: "space-between", // Alinhando logo e perfil nas extremidades
    alignItems: "center",
    borderBottomColor: '#000',
    borderBottomWidth: 2,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 10, // Espaçamento nas laterais
  },
  Img: {
    width: 70,
    height: 60,
  },
  NomeLogo: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#000',
  },
  Perfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor:'#20033b',
  },
  Topo_Menu:{
    flexDirection:'row',
  },
  Menu:{
    marginTop:70,
    backgroundColor: '#f1f123',
    alignItems:'center',
    flexDirection:'column',
    
    width:280,
  },

  BtnContainer:{
    backgroundColor:'#ffff',
    borderColor:'#3c3c3c',
    borderWidth:0.2,
    height:60,
    width:250,
    alignItems:'flex-end'
  },
  BtnFechar:{
    backgroundColor:'red',
    width: 15,
    height:15,
    flexDirection:'colum',
    alignItems:'center',
    justifyContent:'center'
  },
  TextBtn:{
    fontSize:30,
    marginRight:19
  }

});


export default Cabecalho;
