import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button  } from 'react-native-paper'
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import HeaderConcorrenteAdmin from '../../shared/components/HeaderConcorrenteAdmin';
import AddNewProduto from '../AddNewProduto';
import ListItem from '../../shared/components/ListItem';
export default function Produtos() {
  const navigation = useNavigation()
 return (
   <View>
     <HeaderConcorrenteAdmin
     title="Produtos   "
     />
     <Button style={styles.btn}icon="plus" mode="outlined" color="blue" onPress={() => navigation.navigate(AddNewProduto)}>
            Adicionar novo produto ou Similar
     </Button>
        <ListItem
        title="produto 1"
        description="produto"
        />
      <ListItem
      title="Produto 1"
      description="descrição"
      />
      <ListItem
      title="Produto 1"
      description="descrição"
      />
   </View>
  );
}
const styles = StyleSheet.create({
  btn: {
      width: "90%",
      alignSelf:"center",
      marginBottom:"3%",
      marginTop:20
  },
})