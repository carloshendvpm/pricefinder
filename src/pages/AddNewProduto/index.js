import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView, Modal} from 'react-native';
import { TextInput, Button } from 'react-native-paper'
import HeaderConcorrenteAdmin from '../../shared/components/HeaderConcorrenteAdmin';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Scanner from '../../shared/components/Scanner'


// teste 
export default function AddNewProduto() {
    const [modalVisible, setModalVisible] = useState(false);
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
  
    useEffect(() => {
      const getBarCodeScannerPermissions = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      };
  
      getBarCodeScannerPermissions();
    }, []);
  
    const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
      alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };
  
    if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
 return (
   <KeyboardAvoidingView
   behavior={Platform.OS == "ios" ? "padding" : "height"}
   keyboardVerticalOffset={50}
   >
    <Modal
    visible={modalVisible}
    transparent={true}
    animationType="fade"
    onRequestClose={() => setModalVisible(false)}
    >
        <View style={styles.modal}>
                    <View style={styles.scanner}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
                {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
                </View>
            <Button icon="close" mode="contained" onPress={() => setModalVisible(false)}/>
        </View>
    </Modal>
       <HeaderConcorrenteAdmin
       title="Adicionar Novo "
       />
       <ScrollView>
        <View style={styles.containerInput}>
        <TextInput
            label="Produto"
            mode="outlined"
            style={styles.mainInput} 
        />
        <TextInput
            label="Categoria"
            mode="outlined"
            style={styles.mainInput} 
        />
        <View style={styles.containerSecondInput}>
        <TextInput
            label="Peso"
            mode="outlined"
            style={styles.scndInput}
        />
         <TextInput
            label="Preço"
            mode="outlined"
            style={styles.scndInput}
        />
        </View>
        <TextInput
            label="EAN"
            mode="outlined"
            style={styles.mainInput}
        />
        
            <Button title="BUtton" icon="camera" mode="contained-tonal" onPress={() => setModalVisible(true)}>ESCANEAR EAN</Button>        
            <Button style={styles.btnSend} mode="contained">Adicionar produto</Button>
        </View>
    </ScrollView>
   </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
    containerInput: {
        width: "80%",
        alignSelf:"center",
        alignItems:"flex-start"
    },
    containerSecondInput: {
        width: "100%",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    mainInput: {
        width: "100%",
        alignSelf:"center",
        marginTop:"6%"
    },
    scndInput: {
        width: "45%",
        marginTop:"6%",
    },
    btnSend: {
        width: "100%",
        marginTop:"9%"
    },
    modal: {
        flex:1,
        alignItems:"center",
        justifyContent:"space-around",
        borderRadius: 8,
    },
    scanner: {
        width: "100%",
        height: "90%",
        flexDirection:"column",
        justifyContent:"flex-end"
    }
})
