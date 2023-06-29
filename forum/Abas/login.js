import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, TouchableOpacity, TextInput, Alert, SafeAreaView, View, Keyboard} from 'react-native';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebaseConfig';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';




export default function Login({ navigation }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleCreateAccount = () => {
        createUserWithEmailAndPassword(auth, email.trim(), password)
            .then((userCredential) => {
                console.log('Conta criada!')
                const user = userCredential.user;
                console.log(user)
            })
            .catch(error => {
                console.log(error)
                Alert.alert(error.message)
            })
    }
    const handleSignIn = () => {
        if (email != undefined && password !=undefined){
        signInWithEmailAndPassword(auth, email.trim(), password.trim())
            .then((userCredential) => {
                Keyboard.dismiss();
                console.log("usuario logado")
                const user = userCredential.user;
                console.log(user);
                navigation.navigate('full')
            })
            .catch(error => {
                console.log(error)
                setError("Usuário/senha inválidos!")
                setTimeout(tirarText, 4000)
            })
    } else {
        setError("Preencha os campos!")
        setTimeout(tirarText, 4000)
    }}
    const tirarText = () => {
        setError("")
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('welcome')} style={styles.arrow}>
                <AntDesign name="back" size={24} color="black" />
            </TouchableOpacity>
            <Image style={styles.img} source={require('../assets/logo.png')} />

            <View style={styles.icons}>
                <TextInput style={styles.brinputxt} placeholder='Email' enterKeyHint='next' returnKeyType='next' onChangeText={(text) => { setEmail(text) }}>
                </TextInput>
                <AntDesign name="user" size={24} color="black" style={styles.icon} />
            </View>
            <View style={styles.icons}>
                <TextInput style={styles.brinputxt} placeholder='Senha' enterKeyHint='send' returnKeyType='send' secureTextEntry={true} onChangeText={(text) => { setPassword(text) }}>
                </TextInput>
                <AntDesign name="eyeo" size={24} color="black" style={styles.icon} />
            </View>
            <Text style={styles.error}>
                {error}
            </Text>
            
            <TouchableOpacity style={styles.brtt} onPress={handleSignIn}>
                <Text style={styles.brtxt}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forgetPass}>
                <Text>Esqueci minha senha</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F1FFFA',
        alignItems: 'center',
    },

    arrow: {
        marginTop: '15%',
        alignSelf: 'flex-start',
        marginStart: '5%',
    },

    forgetPass: {
        marginTop: '2%',
    },

    img: {
        width: 390,
        height: 270,
        marginBottom: 75,
        marginTop: '25%',
    },

    brtt: {
        width: '60%',
        paddingHorizontal: 5,
        backgroundColor: '#004B86',
        borderRadius: 158,
        paddingVertical: 10,
        marginTop: 20,
        alignItems: 'center',
    },
    icons: {
        flexDirection: 'row',
    },
    icon: {
        marginTop: '2%',
    },

    brtxt: {
        color: '#F1FFFA',
        fontSize: 27,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
    },

    brinputxt: {
        width: '70%',
        borderWidth: 0,
        color: '#495867',
        borderColor: '#000',
        marginBottom: '5%',
        paddingBottom: '2%',
        fontSize: 25,
        borderBottomWidth: 1
    },
    error: {
        color: 'red',
        marginTop: '1%'
    },

});