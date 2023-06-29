import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import * as React from 'react';
import { database } from '../fb';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';


export default function AddNews() {
  const navigation = useNavigation();
  const [newNews, setNewNews] = React.useState({
    title: '',
    content: '',
    createdAt: new Date(),
  });

  const onSend = async () => {
    await addDoc(collection(database, 'ProjetoFirebase'), newNews);
    navigation.navigate('full');
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.txt}>Adicionar discussão</Text>
      <TextInput
        style={styles.input}
        placeholder='Titulo'
        onChangeText={(text) => setNewNews({ ...newNews, title: text })}
      />
      <TextInput
        style={styles.input}
        placeholder='Conteudo'
        multiline={true}
        onChangeText={(text) => setNewNews({ ...newNews, content: text })}
      />
      <TouchableOpacity style={styles.btn} onPress={onSend}>
        <Text style={styles.txtbtn}>Adicionar discussão</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('edit')} style={styles.arrow}>
        <AntDesign name="back" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1FFFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#004B86',
    paddingVertical: '2%',
    borderRadius: 5,
    marginBottom: 5,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    marginTop: '5%',
  },
  txtbtn: {
    color: '#F1FFFA',
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    color: '#968e8d',
    borderColor: '#615856',
    marginBottom: '1%',
    width: '70%',
  },
  arrow:{
    marginTop: '5%',

  },
  txt:{
    marginBottom: '5%',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#968e8d',
  }
});
