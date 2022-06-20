import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button, Divider } from 'react-native-paper'
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import Categorias from '../../../pages/Categorias';

export default function CardBoxConcorrent(props) {
    const navigation = useNavigation()
 return (
   <View>
       <Divider/>
        <Button 
        style={styles.CardBoxConcorrent}
        color={props.color} 
        mode="text" 
        onPress={() => navigation.navigate(Categorias)}
        icon="arrow-right-drop-circle"
        >   
            {props.text}
        </Button>
        <Divider/>
   </View>
  );
}
const styles = StyleSheet.create({
    CardBoxConcorrent: {
        width: "80%",
        alignSelf:"center",
        padding: 10
    }
})