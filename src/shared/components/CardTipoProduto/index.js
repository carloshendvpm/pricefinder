import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useFonts, Poppins_700Bold, Poppins_500Medium, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { useNavigation, NavigationContainer } from '@react-navigation/native';


export default function CardTipoProduto(props) {

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
   <TouchableOpacity 
   style={styles.cardContainer}
   onPress={ () => navigation.navigate(props.navigation) }
   >
       <View style={styles.card}>
           <Text style={styles.txt}>{props.txt}</Text>
       </View>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    cardContainer: {
       height: 60,
       marginBottom:25
    },
    card: {
        height: "70%",
        width: "80%",
        backgroundColor:"#2D33C0",
        alignSelf:"center",
        borderRadius:4,
        alignItems:"flex-start",
        justifyContent:"center",
        paddingHorizontal:10,
        marginTop:10,
    },
    txt: {
        fontFamily:"Poppins_400Regular",
        fontSize:16,
        color:"#FFF"
    }
    
})