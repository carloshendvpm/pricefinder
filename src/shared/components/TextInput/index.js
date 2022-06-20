import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function Input(props) {

 return (
  <View>
    <View styles={styles.passwordContainer}>
        <TextInput
        style={styles.input}
        label="Usuário"
        mode="outlined"
        activeOutlineColor="#1372B8"
        />
    </View>
  </View>
  );
}
const styles = StyleSheet.create({
  input: {
    width: "89%",
    alignSelf:"center",
    marginBottom:"4%",

  },
})