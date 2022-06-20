
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image, TextInput, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useFonts, Poppins_700Bold, Poppins_500Medium, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import CardBoxConcorrent from '../../shared/components/CardBoxConcorrent';
import { Searchbar } from 'react-native-paper';
import HeaderConcorrenteAdmin from '../../shared/components/HeaderConcorrenteAdmin';



export default function Home() {
  let [fontsLoaded, error] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
    Poppins_400Regular,
  });

    const navigation = useNavigation()
   
 return (
    <View>
        <HeaderConcorrenteAdmin
        title="Concorrentes"
        />
            <Searchbar
                placeholder="Pesquisar por um concorrente"
                style={styles.input}
            />
           <View style={{ flexDirection:"column" }}>
           <CardBoxConcorrent
                text="Bom-Preço"
                color="red"
            />
           <CardBoxConcorrent
                text="Carrefour"
                color="blue"
            />
           <CardBoxConcorrent
                text="Extra"
                color="red"
            />
           </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        width: 320,
        justifyContent:"space-between",
        marginTop:20,
        padding: 15
    },
    qlr: {
        backgroundColor:"#1372B8",
        height: 100,
        justifyContent:"center"
    },
    title: {
        fontSize:26,
        color: "#FFF",
        fontFamily:"Poppins_400Regular"
    },
    input: {
        backgroundColor:"#DCDCDC",
        marginTop:17,
        paddingHorizontal:10,
        borderRadius:30,
        width: "90%",
        paddingVertical:2,
        alignSelf:"center",
        marginBottom:"10%"
    }
})

