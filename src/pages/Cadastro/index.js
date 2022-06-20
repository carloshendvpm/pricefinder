import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TextInput } from 'react-native';
import { useFonts, Poppins_700Bold, Poppins_500Medium } from '@expo-google-fonts/poppins';
import Logo from '../../shared/components/Logo';
import Header from '../../shared/components/Header';
import Input from '../../shared/components/TextInput';
import Button from '../../shared/components/Button'
import styles from './styles'
import PassInput from '../../shared/components/PassInput'


export default function Cadastro() {
  let [fontsLoaded, error] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
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
      <Logo />
      <Header title="Login como admin" style={styles.Header} />
      <View style={styles.containerInput}>
        <Input placeholder="Usuário" />
        <PassInput/>
      </View>
      <Button navigation="ConcorrentesAdminView" btnText="Entrar" />
      <View style={styles.containerImage}>
        <Image
          source={require("../../assets/images/login.png")}
          style={styles.imgLogin}
        />
      </View>
    </SafeAreaView>
  );
}
