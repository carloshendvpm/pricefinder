import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ItensCard(props) {
 return (
        <TouchableOpacity style={styles.cardProduto}>
            <Text style={styles.txtProduto}>{props.produto}</Text>
            <Text style={styles.txtMarca}>{props.marca}</Text>
        </TouchableOpacity>

  );
}
const styles = StyleSheet.create({
         cardProduto: {
          height:35,
          width:"80%",
          backgroundColor:"#809DF2",
          alignSelf:"center",
          alignItems:"center",
          justifyContent:"space-between",
          paddingHorizontal:10,
          flexDirection:"row",
          borderRadius:5
      },
      txtProduto: {
        fontSize:16,
        fontFamily:"Poppins_500Medium",
        color:"#FFF"
      },
      txtMarca: {
          fontSize:12,
          fontFamily:"Poppins_400Regular"
      }
})