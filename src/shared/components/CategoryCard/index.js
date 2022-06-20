import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons'
import { Avatar, Divider } from 'react-native-paper'

export default function CategoryCard(props) {
    const navigation = useNavigation()
 return (
   <View>
       <View style={styles.containerCategory}>
            <Avatar.Icon size={50} icon={props.icon}  style={{ backgroundColor:`${props.bg}`}}/>
            <Text style={styles.categoryTitle}>{props.tipo}</Text>
            <TouchableOpacity onPress={() => navigation.navigate(props.navigation) }>
                <Ionicons 
                style={styles.iconBack} 
                name="arrow-forward-circle-outline" 
                size={30} 
                color="#000" 
                />
            </TouchableOpacity>
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
    containerCategory: {
      flexDirection:"row",
      height: 80,
      alignItems:"center",
      justifyContent:"space-between",
      paddingHorizontal:40,
      marginTop:"9%",
      borderWidth:1,
      borderColor:"#d2d2d2",
      borderRadius:40,
      width: "90%",
      alignSelf:"center",
      marginBottom:"2%"
    },
    categoryTitle: {
      fontSize:30,
      fontFamily:"Poppins_400Regular"
    }
  })