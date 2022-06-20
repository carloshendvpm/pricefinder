import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { useFonts, Poppins_700Bold, Poppins_500Medium, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import Header from  '../../shared/components/Header'
import Logo from '../../shared/components/Logo';
import Input from '../../shared/components/TextInput'
import Button from '../../shared/components/Button';
import PassInput from '../../shared/components/PassInput'

export default function Cadastro() {
  const navigation = useNavigation();

  let [fontsLoaded, error] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Não existe</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <SafeAreaView>
      <Logo />
      <KeyboardAvoidingView style={styles.containerHeader}>
        <Header title="Login como usuário" />
      </KeyboardAvoidingView>
     <View style={styles.containerInput}>
     <Input
     placeholder="Usuário"
     typeInputText="Usuário"
     />
     <PassInput/>
     </View>
       <Button
       navigation="TabRoutes"
       btnText="Entrar"
       />
     <View style={styles.containerImage}>
      <Image
      source={require('../../assets/images/login.png')}
      style={styles.imgLogin}
      />
   </View>
   </SafeAreaView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({

})
