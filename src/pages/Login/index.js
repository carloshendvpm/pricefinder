import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { useFonts, Poppins_700Bold, Poppins_500Medium, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import Header from  '../../shared/components/Header'
import Logo from '../../shared/components/Logo';
import Input from '../../shared/components/TextInput'
import Button from '../../shared/components/Button';
import PassInput from '../../shared/components/PassInput'
const API_URL = Platform.OS === 'ios' ? 'http://localhost:8080' : 'http://10.0.2.2:8080';

export default function Cadastro() {

    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [password, setPassword] = useState('');

    const [hidePass, setHidePass] = useState(true);

    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');
    const [isLogin, setIsLogin] = useState(true);
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
  const onChangeHandler = () => {
    setIsLogin(!isLogin);
    setMessage('');
};

const onLoggedIn = token => {
    fetch(`${API_URL}/private`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, 
        },
    })
    .then(async res => { 
        try {
            const jsonRes = await res.json();
            if (res.status === 200) {
                setMessage(jsonRes.message);
                navigation.navigate('Home')
            }
        } catch (err) {
            setMessage(jsonRes.message)
            console.log(err);
        };
    })
    .catch(err => {
        console.log(err);
    });
}

const onSubmitHandler = () => {
    const payload = {
        email,
        nome,
        password,
    };
    fetch(`${API_URL}/${isLogin ? 'login' : 'signup'}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
    .then(async res => { 
        try {
            const jsonRes = await res.json();
            if (res.status !== 200) {
                setIsError(true);
                setMessage(jsonRes.message);
            } else {
                onLoggedIn(jsonRes.token);
                setIsError(false);
                setMessage(jsonRes.message);
                // navigation.navigate('Dashboard')
            }
        } catch (err) {
            console.log(err);
        };
    })
    .catch(err => {
        console.log(err);
    });
};

const getMessage = () => {
    const status = isError ? `Erro! ` : `Successo! `;
    return status + message;
}


  return (
    <SafeAreaView>
      <Logo />
      <Text style={styles.heading}>{isLogin ? 'Login' : 'Signup'}</Text>
      <View style={styles.containerInput}>
      <TextInput
        style={styles.input}
        label="Email"
        mode="outlined"
        activeOutlineColor="#1372B8"
        autoCapitalize='none'
        onChangeText={setEmail}
        />
        {!isLogin && <TextInput style={styles.input} label="Nome" mode="outlined" activeOutlineColor="#1372B8" onChangeText={setNome}></TextInput>}  
     <TextInput 
        secureTextEntry={hidePass}
        label="Senha"
        mode="outlined"
        activeOutlineColor="#1372B8"
        right={<TextInput.Icon name="eye" onPress={() => setHidePass(!hidePass)}/>}
        style={styles.input}
        onChangeText={setPassword}
     />
     <Text style={[styles.message, {color: isError ? 'red' : 'green'}]}>{message ? getMessage() : null}</Text>
     </View>
     <View style={styles.containerBtn}>
      <TouchableOpacity
      style={styles.btnEntrar}
      // onPress={ () => navigation.navigate("Home") }
      onPress={onSubmitHandler}
      >
      <Text style={styles.txtLoginBtn}>{isLogin ? 'Entrar' : 'Cadastrar'}</Text>
      </TouchableOpacity>
    </View>
    <View>
      <Text style={styles.altTxt}>ou</Text>
    <TouchableOpacity style={styles.buttonAlt} onPress={onChangeHandler}>
      <Text style={styles.buttonAltText}>{isLogin ? 'Cadastro' : 'Login'}</Text>
    </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  heading: {
      fontSize: 24,
      color: "#202020",
      alignSelf:"flex-start",
      fontFamily: "Poppins_400Regular",
      marginLeft:"6%",
      marginBottom:"5%"
  },
  input: {
    width: "89%",
    alignSelf:"center",
    marginBottom:"4%",
  },
  txtLoginBtn: {
    color: "white",
    alignSelf:"center",
    fontFamily:"Poppins_500Medium",
    fontSize:16,
    
  },
  containerBtn: {
    width: "90%",
    alignSelf:"center",
    marginTop:"4%"
  },  
  btnEntrar: {
    width: "99%",
    padding: 5,
    borderRadius: 8,
    marginBottom: "1%",
    alignSelf:"center",
    backgroundColor:"#1372B8",
    height: 50,
    justifyContent: "center"
  },
  buttonAlt: {
    width: '50%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    alignSelf:"center",
},
buttonAltText: {
    fontSize: 16,
    fontWeight: '400',
},
message: {
    fontSize: 16,
    marginVertical: '5%',
},
altTxt: {
  alignSelf:'center',
  fontSize: 16,
  marginTop: 5
},

})
