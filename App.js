import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, TextInput, TouchableOpacity, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import CheckBox from '@react-native-community/checkbox'; // Importa CheckBox

// Importa o Cabecalho e o Rodape
import Cabecalho from './src/componentes/Cabecalho';
import Rodape from './src/componentes/Rodape';

class App extends Component {
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
    this.setState({ showDatePicker: Platform.OS === 'ios', date: currentDate });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Cabecalho />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.Formulario}>
            <Text style={styles.Titulo}>Formulario de registro</Text>

            {/* Outros campos do formulário */}
            
            <View style={styles.Descricao}>
              <Text>Recebeu tratamento antirrábico ?</Text>
            </View>
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
        </ScrollView>
        <Rodape />
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

export default App;
