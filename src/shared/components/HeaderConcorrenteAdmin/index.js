import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

export default function HeaderConcorrenteAdmin(props) {
    const navigation = useNavigation()
  return (
        <View style={styles.qlr}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons style={styles.iconBack} name="arrow-back" md="md-arrow-back" size={30} color="#FFF" />
                </TouchableOpacity>
                <Text style={styles.title}> {props.title} </Text>
            </View>
        </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        width: 280,
        justifyContent:"space-between",
        marginTop:20,
        padding: 15
    },
    qlr: {
        backgroundColor:"#1372B8",
        height: 100,
    },
    title: {
        fontSize:26,
        color: "#FFF",
        fontFamily:"Poppins_400Regular",
    },
})