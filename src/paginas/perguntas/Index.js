import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, TextInput, TouchableOpacity, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import CheckBox from '@react-native-community/checkbox';
import Cabecalho from '../../componentes/cabecalho';
import Rodape from '../../componentes/rodape';

export default function Perguntas() {
  const [sexo, setSexo] = useState(0);
  const [tratamentoAntirrabico, setTratamentoAntirrabico] = useState(0);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateText, setDateText] = useState('DD/MM/AAAA');
  const [animais, setAnimais] = useState({
    não: false,
    boi: false,
    porco: false,
    cavalo: false,
    cão: false,
    gato: false,
    aves: false,
  });
  const [circunstancias, setCircunstancias] = useState({
    pescando: false,
    cacando: false,
    lazer: false,
  });

  const sexos = [
    { id: 0, label: 'Selecione o sexo', value: 0 },
    { id: 1, label: 'Masculino', value: 1 },
    { id: 2, label: 'Feminino', value: 2 },
  ];

  const opcoesTratamento = [
    { id: 0, label: 'Selecione', value: 0 },
    { id: 1, label: 'Sim', value: 1 },
    { id: 2, label: 'Não', value: 2 },
  ];

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
    setDateText(formatDate(currentDate));
  };

  const formatDate = (date) => {
    let day = date.getDate().toString().padStart(2, '0');
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };


  function openAlbum(){
    const options = {
      mediaType:"photo",
      quality:1,
      selectionLimit:1
    }
    launchImageLibrary(options, (response) =>{
    
      if(response.didCancel){
        console.log("IMAGE PICKER CANCELADO")
        return;
      }else if(response.error){
        console.log("GEROU ERRO ", response.errorMessage)
        return;
      }

      console.log(response.assets)
      
    })

  }

  async function openCamera(){

    const options = {
      mediaType:"photo",
      quality:1,
      saveToPhotos:true,
    }

    const response = await launchCamera(options)
    
    console.log(response.assets);
  }

    return (
      <View style={{ flex: 1 }}>
        <Cabecalho />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.Formulario}>
              <Text style={styles.Titulo}>Formulario de registro</Text>

              <Text style={styles.Descricao}>Nome do Acs</Text>
              <TextInput style={styles.Entrada} placeholder="Digite o nome do Acs" />

              <Text style={styles.Descricao}>Data do registro</Text>
                <TouchableOpacity style={styles.dateInputContainer} onPress={showDatepicker}>
                    <TextInput
                      style={styles.dateInput}
                      value={dateText}
                      editable={false}
                      placeholder="DD/MM/AAAA"/>
              </TouchableOpacity>

              {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={onChangeDate}/>
                )}


              <Text style={styles.Descricao}>Nome do agredido</Text>
              <TextInput style={styles.Entrada} placeholder="Digite o nome do agredido" />


                <Text style={styles.Descricao}>Data da agressão</Text>
                  <TouchableOpacity style={styles.dateInputContainer} onPress={showDatepicker}>
                  <TextInput
                    style={styles.dateInput}
                    value={dateText}
                    editable={false}
                    placeholder="DD/MM/AAAA"
                  />
                </TouchableOpacity>

                {showDatePicker && (
                  <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    onChange={onChangeDate}
                  />
                )}

              <Text style={styles.Descricao}>Selecione o sexo</Text>
              <View style={styles.PickerContainer}>
                <Picker
                  selectedValue={sexo}
                  onValueChange={(itemValue) => setSexo(itemValue)}
                  style={styles.Picker}>
                  {sexos.map((item) => (
                    <Picker.Item key={item.id} value={item.value} label={item.label} />
                  ))}
                </Picker>

                </View>

                <View style={styles.Containerbotoes}>
                <Text style={{color:'#8301d6', fontSize:20, fontWeight:'bold'}}>Geolocalização</Text>
                  <TouchableOpacity style={styles.Botao}>
                    <View style={styles.BtnArea}>
                      <Text style={styles.BtnTexto}>Obter</Text>
                    </View>
                </TouchableOpacity>
                </View>
              

                <Text style={styles.Descricao}>Municipio da agressão</Text>
                <TextInput style={styles.Entrada} placeholder="Digite o municipio da agressão" />

                <View style={styles.Containerbotoes}>
                <Text style={{color:'#8301d6', fontSize:20, fontWeight:'bold'}}>Fotos</Text>
                  <TouchableOpacity style={styles.Botao}  onPress={openAlbum}>
                    <View style={styles.BtnArea}>
                      <Text style={styles.BtnTexto}>Carregar</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Botao}  onPress={openCamera}>
                    <View style={styles.BtnArea}>
                      <Text style={styles.BtnTexto}>Tirar</Text>
                    </View>
                </TouchableOpacity>
                </View>


                <Text style={styles.Descricao}>Recebeu tratamento antirrábico?</Text>
                  <View style={styles.PickerContainer}>
                    <Picker
                      selectedValue={tratamentoAntirrabico}
                      onValueChange={(itemValue) => setTratamentoAntirrabico(itemValue)}
                      style={styles.Picker}>
                      {opcoesTratamento.map((item) => (
                        <Picker.Item key={item.id} value={item.value} label={item.label} />
                      ))}
                    </Picker>
                  </View>

                  <View>
                    <Text style={styles.Descricao}>Animal agredido?</Text>
                    {Object.keys(animais).map((animal) => (
                      <View key={animal} style={styles.checkboxContainer}>
                        <CheckBox
                          value={animais[animal]}
                          onValueChange={(newValue) =>
                            setAnimais((prevState) => ({
                              ...prevState,
                              [animal]: newValue,
                            }))
                          }
                          tintColors={{ true: '#8301d6', false: 'gray' }}
                        />
                        <Text style={styles.checkboxLabel}>
                          {animal.charAt(0).toUpperCase() + animal.slice(1)}
                        </Text>
                      </View>
                    ))}
                  </View>


                  <View>
                    <Text style={styles.Descricao}>Circunstância</Text>
                    {Object.keys(circunstancias).map((circunstancia) => (
                      <View key={circunstancia} style={styles.checkboxContainer}>
                        <CheckBox
                          value={circunstancias[circunstancia]}
                          onValueChange={(newValue) =>
                            setCircunstancias((prevState) => ({
                              ...prevState,
                              [circunstancia]: newValue,
                            }))
                          }
                          tintColors={{ true: '#8301d6', false: 'gray' }}
                        />
                        <Text style={styles.checkboxLabel}>
                          {circunstancia.charAt(0).toUpperCase() + circunstancia.slice(1)}
                        </Text>
                      </View>
                    ))}
                  </View>

                  <TouchableOpacity style={[styles.Botao, { width: 280, height: 60, marginTop:25 }]}>
                    <View style={styles.BtnArea}>
                      <Text style={styles.BtnTexto}>Enviar Formulario</Text>
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
    paddingVertical: 10, // Adiciona um pequeno padding para mais espaçamento geral
  },
  Titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 30,
    color:'black'
  },
  Descricao: {
    marginTop: 10,
    marginBottom: 20, // Adiciona mais espaçamento entre as perguntas
    width: 260,
    alignItems: 'flex-start',
    color: '#8301d6',
    fontSize: 20,
    fontWeight: 'bold',
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
    color: 'black',
  },
});
