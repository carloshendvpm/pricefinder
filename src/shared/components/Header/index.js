import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header(props) {
 return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
    </View>

   
  );
}
const styles = StyleSheet.create({
    containerText: {
      flex: 1,

    },  
    title: {
      fontSize: 24,
      color: "#202020",
      alignSelf:"flex-start",
      fontFamily: "Poppins_400Regular",
      marginLeft:"6%",
      marginBottom:"5%"
    },
    subtitle: {
        alignSelf:"center",
        fontFamily:"Poppins_500Medium",
        textAlign:"center",
      },
      containerText: {
          marginBottom:"5%"
      }
    }
)