import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import uuid from 'react-native-uuid';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
    StyleSheet, 
    KeyboardAvoidingView, 
    Image, 
    TextInput, 
    TouchableOpacity, 
    Text, 
    View,
    Alert
 } from 'react-native';

 import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  const [Nome, setNome] = useState("");
  const [Sobrenome, setSobrenome] = useState("");
  const [Email, setEmail] = useState("");
  const [Telefone, setTelefone] = useState("");
  const [Senha, setSenha] = useState("");
  const [Datadenascimento, setDatadenascimento] = useState("");
  const [Cep, setCep] = useState("");
  const [Observacao, setObservacao] = useState("");

  async function handleNew (){

    const id = uuid.v4()

    const newData = {
      id,
      Nome,
      Sobrenome,
      Email,
      Telefone,
      Senha,
      Datadenascimento,
      Cep,
      Observacao
    }

    await AsyncStorage.setItem("@appsistematest:senhas", JSON.stringify(newData));

    Toast.show({
      type: 'success',
      text1: 'Cadastrado com sucesso!'
    })

  console.log(newData);
}

  return (

    <KeyboardAvoidingView style={styles.background}>
      
      <View style={styles.container}>
        <TextInput
        style={styles.input}
        placeholder='Nome'
        autoCorrect={false}
        onChangeText={setNome}
        value={Nome}
        />

      <TextInput
        style={styles.input}
        placeholder='Sobrenome'
        autoCorrect={false}
        onChangeText={setSobrenome}
        value={Sobrenome}
        />

        <TextInput
        style={styles.input}
        placeholder='Email de contato'
        autoCorrect={false}
        onChangeText={setEmail}
        value={Email}
        />

        <TextInput
        style={styles.input}
        placeholder='Telefone com DDD'
        autoCorrect={false}
        onChangeText={setTelefone}
        value={Telefone}
        />

        <TextInput
        style={styles.input}
        placeholder='Senha'
        autoCorrect={false}
        secureTextEntry
        onChangeText={setSenha}
        value={Senha}
        />

        <TextInput
        style={styles.input}
        placeholder='Data de nascimento'
        autoCorrect={false}
        onChangeText={setDatadenascimento}
        value={Datadenascimento}
        />

        <TextInput
        style={styles.input}
        placeholder='CEP'
        autoCorrect={false}
        onChangeText={setCep}
        value={Cep}
        />

        <TextInput
        style={styles.inputObs}
        placeholder='Observações'
        autoCorrect={false}
        onChangeText={setObservacao}
        value={Observacao}
        />

        <TouchableOpacity 
        style={styles.submitRegistre}
        onPress= {handleNew}>
        <Text style={styles.submitText}>Finalizar cadastro</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191919'
  },
  containerLogo:{
    flex: 1.5,
    marginBottom: -60,
    justifyContent: 'center',
  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  input:{
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontsize: 17,
    borderRadius: 7,
    padding: 10,
  },
  submitEnter:{
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    padding: 10,
    marginBottom: 5,
  },
  submitRegistre:{
    backgroundColor: '#008000',
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    padding: 10,
    marginBottom: 5,
  },
  submitText:{
    color: '#FFF',
    fontSize: 18,
  },
  inputObs:{
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 50,
    color: '#222',
    fontsize: 17,
    borderRadius: 7,
    padding: 35,
  },
  submitVoltar: {
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    padding: 10,
    marginBottom: 5,
  }
  



});