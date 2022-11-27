import React from 'react';
import { View, StyleSheet, Text} from "react-native"
import { useFonts, Poppins_700Bold, Poppins_500Medium, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Avatar, Button } from 'react-native-paper'
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import BemVindo from '../BemVindo';

export default function CadastroNovoConcorrente() {
  let [fontsLoaded, error] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
    Poppins_400Regular,
  });
  const navigation = useNavigation()

  return (
    <>
    <View style={styles.container}>
       <Avatar.Image size={100} source={require('../../assets/images/sample-avatar.jpg')} />
       <Text style={styles.name}>Gabriel Torres</Text>
       <Text style={styles.description}>Funcionário ArcoMix</Text>
       <Text style={styles.typeDesc}>(Funcionário normal)</Text>
    </View>
    <Button style={styles.btnLogOut} color="#EA242A"icon="account-remove" mode="contained" onPress={() => navigation.navigate(BemVindo)}>
        Log Out
    </Button>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems:"center",
    marginTop:"10%",
    height: "20%",
    marginBottom:"90%"
  },
  name: {
    fontSize:30,
    fontFamily:"Poppins_700Bold",
    color:"#161616"
  },
  description:{
    fontSize:18,
    fontFamily:"Poppins_400Regular",
    marginTop:-14,
    marginBottom:"2%",
    color: "#4F4F4F"
  },
  btnLogOut: {
    width: 300,
    alignSelf:"center"
  }
})