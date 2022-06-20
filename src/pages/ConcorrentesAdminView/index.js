import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Searchbar } from 'react-native-paper'
import CardBoxConcorrent from '../../shared/components/CardBoxConcorrent';
import HeaderConcorrenteAdmin from '../../shared/components/HeaderConcorrenteAdmin';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import AddNewConcorrente from '../AddNewConcorrente';

export default function ConcorrentesAdminView() {

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
        <Button style={styles.btn}icon="plus" mode="outlined" color="blue" onPress={() =>navigation.navigate(AddNewConcorrente)}>
            Adicionar novo concorrente
        </Button>
        <CardBoxConcorrent
        text="Bom Preço"
        color="red"
        />
        <CardBoxConcorrent
        text="Carrefour"
        color="blue"
        />
    </View>
  );
}
const styles = StyleSheet.create({
    btn: {
        width: "90%",
        alignSelf:"center",
        marginBottom:"3%"
    },
    input: {
        backgroundColor:"#DCDCDC",
        marginTop:17,
        paddingHorizontal:10,
        borderRadius:30,
        width: "90%",
        paddingVertical:2,
        alignSelf:"center",
        marginBottom:"5%"
    }
})