import { useState, useEffect } from 'react';
import {  AntDesign  } from '@expo/vector-icons'; 
import { database } from '../fb.js';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { QuerySnapshot } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, Image, TouchableOpacity, TextInput, Alert, SafeAreaView, View, Keyboard} from 'react-native';
import News from './News.js';



export default function FullNews(){

    const [news, setNews] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
      const collectionRef = collection(database, 'ProjetoFirebase');
      const q = query(collectionRef, orderBy('createdAt', 'desc'))
      

      const unsuscribe = onSnapshot(q, QuerySnapshot => {
        setNews (
          QuerySnapshot.docs.map(doc => ({ 
            id: doc.id,
            title: doc.data().title,
            content: doc.data().content,
            createAt: doc.data().createAt
            
          })
        )
        )})
      return unsuscribe;
      
    }, [])
      
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.edit}onPress={() => navigation.navigate('edit')}>
            <AntDesign name="user" size={40} color="black" />       
          </TouchableOpacity>
        <Text style={styles.txt}>Discussões:</Text>
        <Text>   </Text>
        {news.map(noticia => <News key={noticia.id} {...noticia} />)}
        <View style={styles.row}>
        </View>
      </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F1FFFA',
      alignItems: "center",
    },
    edit: {
      marginTop: '8%',
      alignSelf:'flex-end',
      marginBottom: '8%',
    },
    
    row:{
      flexDirection: 'row', 
    },
    txt:{
      fontSize: 30,
      color: "#615856",
      fontStyle: "italic",
      fontWeight: "bold",
    }, 
    txtx:{
      fontSize: 32,
      
  },
    img:{
      width: 200,
      height: 200,
      marginBottom: "1%",
      marginTop: "2%",
    },
    btn:{
      backgroundColor: "#004B86",
      paddingHorizontal: "3%",
      paddingVertical: "1%", 
      borderRadius: 5,
    },
    txtbtn :{
      color: "#ddd2d2",
      fontFamily: "Tahoma", 
    },
    txtInput:{
      borderWidth: 1,
      borderRadius: 5, 
      color: "#968e8d" ,
      borderColor: "#615856",
      marginBottom: "1%",
      width: '70%'
    },
    icon:{
      position:'absolute',
      right: 60,
      marginBottom: 20,
    }
  });
