import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';

const widthOfWindow = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textinput: {
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 3,
    width: widthOfWindow - 10,
    margin: 10,
    paddingLeft: 5,
    height: 50
  }
});

export default function App() {
  const [fontColor, setFontColor] = useState('black');
  const [backgroundColor, setBackgroundColor] = useState('azure');


  return (
    <View style={styles.container}>
      <View style={{backgroundColor: backgroundColor}}>
       <Text style={{color: fontColor}}>Open up App.js to start working on your app!</Text>
      </View>
      <TextInput placeholder='Font color' style={styles.textinput} onChangeText={value=> setFontColor(value)} autoCapitalize = 'none'></TextInput>
      <TextInput placeholder='Background color' style={styles.textinput} onChangeText={value=> setBackgroundColor(value)} autoCapitalize = 'none'></TextInput>
      
    </View>
  );
}


