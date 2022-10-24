import { StatusBar } from 'expo-status-bar';
import { 
    StyleSheet, 
    KeyboardAvoidingView, 
    Image, 
    TextInput, 
    TouchableOpacity, 
    Text, 
    View,
    Container,
    Alert,
    SafeAreaView
 } from 'react-native';
 import AsyncStorage from '@react-native-async-storage/async-storage';

 import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  const logout = async() => {
    await AsyncStorage.removeItem('Token')
    navigation.navigate('Login')
}

const handleNew = async() => {
  const value = await AsyncStorage.getItem('@appsistematest:Senhas')
  
}

  return (

    <KeyboardAvoidingView style={styles.background}>

        <View style={styles.inputAdc}>
        <TouchableOpacity 
        style={styles.submitRegistre}
        onPress={() => navigation.navigate('Cadastro')}>
        <Image style={styles.Image} source={require('../assets/iconmais.png')}/>
        </TouchableOpacity>
        </View>

    <View style={styles.inputOne}>

            <View>
            <Text style={styles.TextName}>Roney de Almeida Azevedo</Text>
            <Text style={styles.TextEmail}>email@roney.com</Text>
            </View>

        <View style={styles.itemsLine}>

            <TouchableOpacity 
                style={styles.submitEdit} 
                onPress={() => navigation.navigate('Cadastro')}>
                <Image style={styles.ImageLix} source={require('../assets/lapis.png')} />
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.submitEdit} 
                onPress={() => Alert.alert(
                  "DESEJA DELETAR O USUÁRIO",
                 "",
                 [
                   {
                     text: "Cancel",
                     onPress: () => console.log("Cancel Pressed"),
                     style: "cancel"
                   },
                   { text: "DELETAR", onPress: () => console.log("OK Pressed") }
                 ]
                ) }>
                <Image style={styles.ImageLix} source={require('../assets/lixeira.png')} />
            </TouchableOpacity>

        </View>

    </View>


    <View style={styles.inputTwo}>

            <View>
            <Text style={styles.TextName}>Gabriela de Lima Rodrigues</Text>
            <Text style={styles.TextEmail}>contato@gabriela.com</Text>
            </View>

        <View style={styles.itemsLine}>

            <TouchableOpacity 
                style={styles.submitEdit} 
                onPress={() => navigation.navigate('Cadastro')}>
                <Image style={styles.ImageLix} source={require('../assets/lapis.png')} />
            </TouchableOpacity>

             <TouchableOpacity 
                style={styles.submitEdit} 
                onPress={() => Alert.alert(
                  "DESEJA DELETAR O USUÁRIO",
                 "",
                 [
                   {
                     text: "Cancel",
                     onPress: () => console.log("Cancel Pressed"),
                     style: "cancel"
                   },
                   { text: "DELETAR", onPress: () => console.log("OK Pressed") }
                 ]
                )}>
                <Image style={styles.ImageLix} source={require('../assets/lixeira.png')} />
            </TouchableOpacity>

        </View>

     </View>


    <View style={styles.inputTree}>

        <View>
        <Text style={styles.TextName}>Eduardo Gomes Vieira</Text>
        <Text style={styles.TextEmail}>dominio@eduardo.com.br</Text> 
        </View>

        <View style={styles.itemsLine}>
            <TouchableOpacity 
                style={styles.submitEdit} 
                onPress={() => navigation.navigate('Cadastro')}>
                <Image style={styles.ImageLix} source={require('../assets/lapis.png')} />
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.submitEdit} 
                 onPress={() => Alert.alert( 
                 "DESEJA DELETAR O USUÁRIO",
                 "",
                 [
                   {
                     text: "Cancel",
                     onPress: () => console.log("Cancel Pressed"),
                     style: "cancel",
                   },
                   { text: "DELETAR", onPress: () => console.log("DELETADO") },
                  
                 ]
                 
                 )}>
                <Image style={styles.ImageLix} source={require('../assets/lixeira.png')} />
            </TouchableOpacity>

        </View>
      
    </View>


        <TouchableOpacity 
        style={styles.submitEnter}
        onPress={logout}>
        <Text style={styles.submitText}>SAIR DO SISTEMA</Text>
        </TouchableOpacity>
        

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

  submitRegistre:{
    backgroundColor: '#FFF',
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    padding: 10,
    
  },

  submitEnter:{
    backgroundColor: '#FF0000',
    width: '81%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    padding: 10,
    marginBottom: 15,
  },
    submitEdit:{
       alignItems: 'flex-start'
  },
  submitText:{
    fontSize: 18,
    fontWeight: 'bold',
  },

  inputAdc:{
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    marginBottom: 10,
  },
  Image:{
    width: 50,
    height: 50,
  },
  viewDow:{
    width: 50,
    height: 50,
    flexDirection: 'row'
  },
  input:{
    backgroundColor: '#FFF',
    width: '81%',
    marginBottom: 5,
    color: '#222',
    fontsize: 17,
    borderRadius: 7,
    padding: 25,
  },

  itemsLine:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '25%'
  },

  inputOne:{
    backgroundColor: '#FFF',
    width: '81%',
    marginBottom: 10,
    color: '#222',
    fontsize: 17,
    borderRadius: 7,
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  inputTwo:{
    backgroundColor: '#FFF',
    marginBottom: 10,
    width: '81%',
    color: '#222',
    fontsize: 17,
    borderRadius: 7,
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  inputTree:{
    backgroundColor: '#FFF',
    width: '81%',
    marginBottom: 80,
    color: '#222',
    fontsize: 17,
    borderRadius: 7,
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  TextEmail:{
    color: '#808080',
    fontSize: 15,
  },
  TextName:{
    fontSize: 17,
    fontWeight: 'bold',
  },
  ImageLix:{
    width: 30,
    height: 30,
    flexDirection: 'row'
  }

});