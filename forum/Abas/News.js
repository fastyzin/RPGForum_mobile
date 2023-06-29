import * as React from 'react';
import { StyleSheet,Text, View, TouchableOpacity} from 'react-native';
import { database } from '../fb';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { AntDesign  } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

export default function News ({
    id,
    title,
    content
}) {
    const navigation = useNavigation();

    const onDelete = () => {
        const docRef = doc(database, 'ProjetoFirebase', id);
        deleteDoc(docRef);
    }
    return(
        <View style={styles.container}>
            <View style={styles.row}> 
                <View style={styles.col}>
                    <Text style={styles.txt}>{title}</Text>
                    <Text style={styles.subtitle}>{content}</Text>
                </View>
                <Text>                             </Text>
                <TouchableOpacity onPress={onDelete}>
                    <AntDesign name="delete" size={32} color="#615856" />
                </TouchableOpacity>             
           </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#EFF3FB',
      justifyContent: 'center',
      width:'80%',
      borderRadius: 10,
      paddingBottom: 10,
      marginBottom: '2%',
    },
    col:{ 
        flexDirection: 'column',
        flexShrink: 1,
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginStart: '4%',
        marginEnd: '4%',
        alignItems: 'center', 
    },
    txt:{
        fontSize: 24,
        color: "#615856",
        fontWeight: 'bold',
        textAlign: 'justify',
    },
    subtitle:{
      fontSize: 14,
      color: "#615856",
      textAlign: 'justify',
  },
    btn:{
        backgroundColor: "#615856",
        paddingHorizontal: "3%",
        paddingVertical: "1%", 
        justifyContent: 'center',
        borderRadius: 5,
        marginBottom: 5,
        width: 200,
        height: 40,
        
      },
      txtbtn :{
        color: "#ddd2d2",
        fontSize: 32,
        textAlign: 'center',
        justifyContent: 'center'
      },
})
