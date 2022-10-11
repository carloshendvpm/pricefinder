import React from 'react';
import { View, StyleSheet } from 'react-native';
import HeaderConcorrenteAdmin from '../../shared/components/HeaderConcorrenteAdmin';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation, NavigationContainer } from '@react-navigation/native';


export default function AddNewConcorrente() {
    const navigation = useNavigation()
 return (
   <View>
       <HeaderConcorrenteAdmin
       title="Adicionar Novo"
       />
      <View style={styles.containerInput}>
        <TextInput
            label="Nome do Concorrente"
            mode="flat"
            style={styles.input}
            underlineColor="blue"
            activeUnderlineColor="blue"
        />
        <TextInput
            label="Localidade"
            mode="flat"
            style={styles.input}
            underlineColor="blue"
            activeUnderlineColor="blue"    
        />
        <Button mode="contained" onPress={() => navigation.navigate(ConcorrentesAdminView) }>
            Adicionar Concorrente
        </Button>
      </View>
   </View>
  );
}
const styles = StyleSheet.create({
    input: {
        width: "80%",
        alignSelf:"center",
        marginBottom:40
    },
    containerInput: {
        height: "70%",
        alignItems:"center",
        justifyContent:"center"
    }
})