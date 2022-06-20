import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper'
import HeaderConcorrenteAdmin from '../../shared/components/HeaderConcorrenteAdmin';

// teste 
export default function AddNewProduto() {
 return (
   <KeyboardAvoidingView
   behavior={Platform.OS == "ios" ? "padding" : "height"}
   keyboardVerticalOffset={50}
   >
       <HeaderConcorrenteAdmin
       title="Adicionar Novo "
       />
       <ScrollView>
        <View style={styles.containerInput}>
        <TextInput
            label="Produto"
            mode="outlined"
            style={styles.mainInput} 
        />
        <TextInput
            label="Categoria"
            mode="outlined"
            style={styles.mainInput} 
        />
        <View style={styles.containerSecondInput}>
        <TextInput
            label="Peso"
            mode="outlined"
            style={styles.scndInput}
        />
         <TextInput
            label="Preço"
            mode="outlined"
            style={styles.scndInput}
        />
        </View>
        <TextInput
            label="EAN"
            mode="outlined"
            style={styles.mainInput}
        />
        <Button icon="camera" mode="contained-tonal" onPress={() => navigation}>
            Capturar EAN
        </Button>
        <Button style={styles.btnSend}mode="contained">Adicionar produto</Button>
        </View>
     </ScrollView>
   </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
    containerInput: {
        width: "80%",
        alignSelf:"center",
        alignItems:"flex-start"
    },
    containerSecondInput: {
        width: "100%",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    mainInput: {
        width: "100%",
        alignSelf:"center",
        marginTop:"6%"
    },
    scndInput: {
        width: "45%",
        marginTop:"6%",
    },
    btnSend: {
        width: "100%",
        marginTop:"9%"
    }
})
