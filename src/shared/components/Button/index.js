import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { Button } from 'react-native-paper';
export default function Btn(props) {


    const navigation = useNavigation()

    return (
    <View style={styles.containerBtn}>
      <Button
      style={styles.btnEntrar}
      onPress={ () => navigation.navigate(props.navigation) }
      >
      <Text style={styles.txtLoginBtn}>{props.btnText}</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
    txtLoginBtn: {
        color: "white",
        alignSelf:"center",
        fontFamily:"Poppins_500Medium",
        fontSize:12,
      },
      containerBtn: {
        width: "90%",
        alignSelf:"center",
        marginTop:"4%"
      },  
      btnEntrar: {
        width: "99%",
        padding: 5,
        borderRadius: 8,
        marginBottom: "1%",
        alignSelf:"center",
        backgroundColor:"#1372B8"
      },

})