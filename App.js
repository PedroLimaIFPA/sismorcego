import React, { Component } from "react";
import { View, Text, Image } from 'react-native';
class App extends Component{
  render(){

    let img = 'https://sujeitoprogramador.com/steve.png'

    return(
      <View>
        <Text>
          Hellow Brasil!
        </Text>
        <Image
        source={{ uri: img}}
        style={{width:300, height: 300}}
        />
      </View>
    )
  }
}
export default App;
