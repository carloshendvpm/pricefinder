import React, {useState, useEffect} from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList,Text } from 'react-native';
import { Modal, Portal, Button, Provider, TextInput, List, Divider } from 'react-native-paper';
import { useNavigation, NavigationContainer } from '@react-navigation/native';


import HeaderConcorrenteAdmin from '../../shared/components/HeaderConcorrenteAdmin';
import AddNewProduto from '../AddNewProduto';
// import ListItem from '../../shared/components/ListItem';

const API_URL = Platform.OS === 'ios' ? 'http://localhost:8080/produtos' : 'http://10.0.2.2:8080/produtos';

export default function Produtos() {

   const [visible, setVisible] = React.useState(false);
   const [produtos, setProdutos] = useState([])

  const [novoNome, setNovoNome] = useState('')
  const [novaDescricao, setNovaDescricao] = useState('')
  const [novoPreco, setNovoPreco] = useState(0)


  const [produto, setProduto] = useState(null)

  const getItems = () => {
    fetch(API_URL, {
      method: 'GET'
    }).then(response => response.json())
    .then(response => {
      setProdutos(response.products)
      console.log(response.products)
    })
  }

  useEffect(() => {
    getItems()
  }, [])

  const addItem = () => {
    if (novoNome.trim().length > 0) {
      const data = {
        nome: novoNome,
        descricao: novaDescricao,
        preco: novoPreco
      }
      console.log(data)
      setNovoNome('')
      setNovaDescricao('')
      setNovoPreco('')
      hideModal()
      fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(() => {
        console.log('OK')
        getItems()
      })
    }
  }

  const save = () => {
    const data = {
      id: produto.id,
      preco: novoPreco
    }
    console.log(produto.id)
    console.log(novoPreco)
    setNovoPreco('')
    setProduto(null)
    fetch(API_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then(() => {
      console.log('OK')
      getItems()
    })
  }

  const edit = (item) => {
    setNovoNome('')
    setNovoPreco('')
    setProduto(item)
  }


  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: '2c2c2c', paddingVertical: 20};
  const navigation = useNavigation()
 return (
  <Provider>
    <HeaderConcorrenteAdmin
     title="Produtos"
     />
     <Button style={styles.btn}icon="plus" mode="outlined" color="blue" onPress={showModal}>
            Adicionar novo produto ou Similar
     </Button>
     <FlatList data={produtos} keyExtractor={item => `${item.id}`} renderItem={({item}) => {
        return (
          <List.Item 
            onPress={() => edit(item)}
            title={item.nome}
            description={item.descricao}
            right={props => <Text>{item.preco && `R$${item.preco}`}</Text>}
          />
          // <TouchableOpacity style={styles.itemLine} onPress={() => edit(item)}>
          //   <Text>{item.nome}</Text><Text>{item.descricao} {item.preco}</Text>
          // </TouchableOpacity>
        )
      }} />
     <Portal>
    <Modal visible={produto != null} onDismiss={() => setProduto(null)} contentContainerStyle={containerStyle}>
    <View style={styles.form}>
        <TextInput style={[styles.input, {width: '50%', alignSelf: "center"}]} 
          value={novoPreco} onChangeText={text => setNovoPreco(text)} label="Novo preco" mode='outlined'
        />
        <Button style={[styles.button, {width: '50%', marginTop: 20, alignSelf: "center" }]} onPress={save}>
          <Text>Adicionar</Text>
        </Button>
        <Button style={[styles.button, {width: '50%', marginTop: 20, alignSelf: "center" }]} onPress={() => setProduto(null)}>
          <Text>Cancelar</Text>
        </Button>
      </View>
    </Modal>
  </Portal>
  <Portal>
    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
    <View style={styles.form}>
        <TextInput style={[ {width: '50%', alignSelf: "center", marginBottom: 20}]} 
          value={novoNome} onChangeText={text => setNovoNome(text)} label="Produto" mode='outlined'
        />
        <TextInput style={[styles.input, {width: '50%', alignSelf: "center"}]} 
          value={novaDescricao} onChangeText={text => setNovaDescricao(text)} label="Descrição" mode='outlined'
        />
        <TextInput style={[styles.input, {width: '50%', alignSelf: "center"}]} 
          value={novoPreco} onChangeText={text => setNovoPreco(text)} label="Preco" mode='outlined'
        />
        <Button style={[styles.button, {width: '50%', marginTop: 20, alignSelf: "center" }]} onPress={addItem}>
          <Text>Adicionar</Text>
        </Button>
      </View>
    </Modal>
  </Portal>
</Provider>
  //  <View>
  //    
  //  </View>
  );
}
const styles = StyleSheet.create({
  btn: {
      width: "90%",
      alignSelf:"center",
      marginBottom:"3%",
      marginTop:20
  },
})