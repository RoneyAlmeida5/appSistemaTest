import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { 
    StyleSheet, 
    KeyboardAvoidingView, 
    Image, 
    TextInput, 
    TouchableOpacity, 
    Text, 
    View
 } from 'react-native';
 import { useNavigation } from '@react-navigation/native';
 import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
  const navigation = useNavigation();

   const [Email, setEmail] = useState('')
    const [Senha, setSenha] = useState('')
    const [Token, setToken] = useState(null)

    const onSubmit = async() => {
      await AsyncStorage.setItem('Token', Email)
      if (Email === 'Roney' && Senha === '123') {
          console.log('lOGADO')
          navigation.navigate('User')
      }else {
         console.log('USUARIO OU SENHA INCORRETA')
      }
  }

  const tokenlogin = async() => {
      const value = await AsyncStorage.getItem('Token')
      if (value !== null) {
          navigation.navigate('User')
          console.log('VOCÊ ESTÁ CONECTADO')
      }else {
          console.log('NÃO FOI POSSIVEL RETORNAR TOKEN')
      }
  }

  tokenlogin()

  return (

    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image source={require('../assets/logo.png')}/>
      </View>
      
      <View style={styles.container}>
        <TextInput
        style={styles.input}
        placeholder='Email'
        autoCorrect={false}
        onChangeText={(value)=> setEmail(value)}
        />

      <TextInput
        style={styles.input}
        placeholder='Senha'
        autoCorrect={false}
        secureTextEntry
        onChangeText={(value)=> setSenha(value)}
        />

        <TouchableOpacity 
        style={styles.submitEnter}
        onPress={onSubmit}>
        <Text style={styles.submitText}>Entrar no sistema</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.submitRegistre}
        onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.submitText}>Cadastrar usuário</Text>
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
  },
  submitText:{
    color: '#FFF',
    fontSize: 18,
  }



});
