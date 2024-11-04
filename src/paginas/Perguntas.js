import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, TextInput, TouchableOpacity, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import CheckBox from '@react-native-community/checkbox';
import Cabecalho from './src/componentes/cabecalho';
import Rodape from './src/componentes/rodape';

class Perguntas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sexo: 0,
      sexos: [
        { id: 0, label: 'Selecione o sexo', value: 0 },
        { id: 1, label: 'Masculino', value: 1 },
        { id: 2, label: 'Feminino', value: 2 }
      ], 
      tratamentoAntirrabico: 0,
      opcoesTratamento: [
        { id: 0, label: 'Selecione', value: 0 },
        { id: 1, label: 'Sim', value: 1 },
        { id: 2, label: 'Não', value: 2 }
      ],
      date: new Date(),
      showDatePicker: false,
      dateText: 'DD/MM/AAAA',
      animais: {
        não: false,
        boi: false,
        porco: false,
        cavalo: false,
        cão: false,
        gato: false,
        aves: false,
      },
      circunstancias: {
        pescando: false,
        cacando: false,
        lazer: false,
      },
    };
  }

  showDatepicker = () => {
    this.setState({ showDatePicker: true });
  };

  onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.date;
    this.setState({
      showDatePicker: Platform.OS === 'ios',
      date: currentDate,
      dateText: this.formatDate(currentDate)
    });
  };

  formatDate = (date) => {
    let day = date.getDate().toString().padStart(2, '0');
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Cabecalho />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.Formulario}>
              <Text style={styles.Titulo}>Formulario de registro</Text>

              <Text style={styles.Descricao}>Nome do Acs</Text>
              <TextInput style={styles.Entrada} placeholder="Digite o nome do Acs" />

              <Text style={styles.Descricao}>Data do registro</Text>
              <TouchableOpacity style={styles.dateInputContainer} onPress={this.showDatepicker}>
                <TextInput
                  style={styles.dateInput}
                  value={this.state.dateText}
                  editable={false}
                  placeholder="DD/MM/AAAA"
                />
              </TouchableOpacity>
              {this.state.showDatePicker && (
                <DateTimePicker
                  value={this.state.date}
                  mode="date"
                  display="default"
                  onChange={this.onChangeDate}
                />
              )}

              <Text style={styles.Descricao}>Nome do agredido</Text>
              <TextInput style={styles.Entrada} placeholder="Digite o nome do agredido" />


              <Text style={styles.Descricao}>Data da agressão</Text>
              <TouchableOpacity style={styles.dateInputContainer} onPress={this.showDatepicker}>
                <TextInput
                  style={styles.dateInput}
                  value={this.state.dateText}
                  editable={false}
                  placeholder="DD/MM/AAAA"
                />
              </TouchableOpacity>
              {this.state.showDatePicker && (
                <DateTimePicker
                  value={this.state.date}
                  mode="date"
                  display="default"
                  onChange={this.onChangeDate}
                />
              )}

              
                <Text style={styles.Descricao}>Selecione o sexo</Text>
                <View style={styles.PickerContainer}>
                  <Picker
                    selectedValue={this.state.sexo}
                    onValueChange={(itemValue) => this.setState({ sexo: itemValue })}
                    style={styles.Picker}>
                    {this.state.sexos.map((item) => (
                      <Picker.Item key={item.id} value={item.value} label={item.label} />
                    ))}
                  </Picker>
                </View>

                <View style={styles.Containerbotoes}>
                <Text style={{color:'#8301d6'}}>Geolocalização</Text>
                  <TouchableOpacity style={styles.Botao}>
                    <View style={styles.BtnArea}>
                      <Text style={styles.BtnTexto}>Obter</Text>
                    </View>
                </TouchableOpacity>
                </View>
              

                <Text style={styles.Descricao}>Municipio da agressão</Text>
                <TextInput style={styles.Entrada} placeholder="Digite o municipio da agressão" />

                <View style={styles.Containerbotoes}>
                <Text style={{color:'#8301d6'}}>Fotos</Text>
                  <TouchableOpacity style={styles.Botao}>
                    <View style={styles.BtnArea}>
                      <Text style={styles.BtnTexto}>Carregar</Text>
                    </View>
                </TouchableOpacity>
                </View>


                <Text style={styles.Descricao}t>Recebeu tratamento antirrábico ?</Text>
                <View style={styles.PickerContainer}>
                <Picker
                  selectedValue={this.state.tratamentoAntirrabico}
                  onValueChange={(itemValue) => this.setState({ tratamentoAntirrabico: itemValue })}
                  style={styles.Picker}>
                  {this.state.opcoesTratamento.map((item) => (
                    <Picker.Item key={item.id} value={item.value} label={item.label} />
                  ))}
                </Picker>
              </View>
              <View>


              <View style={styles.Descricao}>
                <Text>Animal agredido ?</Text>
              </View>
              {Object.keys(this.state.animais).map((animal) => (
                <View key={animal} style={styles.checkboxContainer}>
                  <CheckBox
                    value={this.state.animais[animal]}
                    onValueChange={(newValue) =>
                      this.setState((prevState) => ({
                        animais: {
                          ...prevState.animais,
                          [animal]: newValue,
                        },
                      }))
                    }
                    tintColors={{ true: '#8301d6', false: 'gray' }}
                  />
                  <Text style={styles.checkboxLabel}>{animal.charAt(0).toUpperCase() + animal.slice(1)}</Text>
                </View>
              ))}
              </View>
              <View>
              <View style={styles.Descricao}>
                <Text>Circunstância</Text>
              </View>
              {Object.keys(this.state.circunstancias).map((circunstancia) => (
                <View key={circunstancia} style={styles.checkboxContainer}>
                  <CheckBox
                    value={this.state.circunstancias[circunstancia]}
                    onValueChange={(newValue) =>
                      this.setState((prevState) => ({
                        circunstancias: {
                          ...prevState.circunstancias,
                          [circunstancia]: newValue,
                        },
                      }))
                    }
                    tintColors={{ true: '#8301d6', false: 'gray' }}
                  />
                  <Text style={styles.checkboxLabel}>{circunstancia.charAt(0).toUpperCase() + circunstancia.slice(1)}</Text>
                </View>
              ))}
              </View>
            </View>
          </ScrollView>
        <Rodape/>
      </View>
    );
  }
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
    width:100,
    height:40,
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
  dateInputContainer: {
    width: 300,
    height: 50, // Define a mesma altura de Entrada
    borderWidth: 1,
    borderColor: 'black', // Altera a cor para combinar com Entrada
    borderRadius: 15, // Define o mesmo borderRadius de Entrada
    margin: 6,
    justifyContent: 'center', // Alinha o texto ao centro verticalmente
    paddingHorizontal: 10, // Ajuste para combinar com Entrada
    backgroundColor: '#f5f5f5', // Mantém a cor de fundo
  },
  dateInput: {
    flex: 1,
    color: '#000',
  },
  PickerContainer: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    margin: 6,
    overflow: 'hidden',
  },
  Picker: {
    width: '100%',
    height: '100%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Alinha o checkbox e o texto verticalmente
    justifyContent: 'flex-start', // Alinha os checkboxes à esquerda
    marginVertical: 4,
  },
  checkboxLabel: {
    marginLeft: 8,
    color: '#8301d6',
  },
});
export default Perguntas;
