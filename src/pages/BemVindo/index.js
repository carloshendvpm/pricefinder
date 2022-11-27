import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import { useFonts, Poppins_700Bold, Poppins_500Medium, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation, NavigationContainer } from '@react-navigation/native';
import Button from '../../shared/components/Button';

export default function BemVindo() {
    
    const navigation = useNavigation()

    let [fontsLoaded, error] = useFonts({
        Poppins_700Bold,
        Poppins_500Medium,
        Poppins_400Regular
    });

    if(!fontsLoaded){
        return (
            <View>
                <Text>Não existe</Text>
            </View>
        )
    }

 return (
<ScrollView>
   <SafeAreaView>
       <View style={styles.container}>
       <View style={styles.containerLogo}>
           <Image
                source={require('../../assets/images/logo.png')}
                style={styles.logo}
           />
       </View>
       <View>
           <Text multiline style={styles.title}>Bem vindo ao Preços Mix</Text>
           <Text style={styles.subtitle}>Entre como usuário comum ou admin para ações</Text>
       </View>
       <View style={styles.containerWomanImage}>
            <Image
                source={require('../../assets/images/woman.png')}
                style={styles.womanImage}
            />
       </View>
       <Button
            navigation="Login"
            btnText="Entrar"
        />

       {/* <View style={styles.containerBtns}>
           onPress={ () => navigation.navigate('Login') }
            <TouchableOpacity 
            style={styles.btnLogIn}
            >
                <Text style={styles.txtLogin}>Login usuário</Text>
            </TouchableOpacity>
           
       </View> */}
    </View>
   </SafeAreaView>
 </ScrollView>
  );
}
