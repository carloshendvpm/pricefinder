import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TextInput } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Input(props) {
    const [hidePass, setHidePass] = useState(true)

 return (
   <View>
       <View styles={styles.passwordContainer}>
            <TextInput
            style={styles.input}
            label="Senha"
            secureTextEntry={hidePass}
            right={<TextInput.Icon name="eye" onPress={() => setHidePass(!hidePass)}/>}
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
        marginBottom:"7%",

      },
      inputContainerText: {
        width: "90%",
        alignSelf:"center"
      }, 
      textInput: {
        alignSelf:"flex-start",
        marginBottom:"2%"
      },
      
})