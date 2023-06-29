import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, TouchableOpacity, TextInput, Alert, SafeAreaView, View } from 'react-native';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebaseConfig';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';


export default function Register({ navigation }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [error, setError] = useState();

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);


    const handleCreateAccount = () => {
        if (password == confirmPassword) {
            if (email != undefined && password != undefined) {
                if (password.length >= 6) {
                    createUserWithEmailAndPassword(auth, email.trim(), password.trim())
                        .then((userCredential) => {
                            console.log('Conta criada!')
                            const user = userCredential.user;
                            console.log(user);
                            navigation.navigate('contaCriada');
                        })
                        .catch(error => {
                            console.log(error)
                            setError("Email inválido!")
                            setTimeout(tirarText, 4000)

                        })
                } else {
                    setError("A senha deve ter no mínimo 6 caracteres!")
                    setTimeout(tirarText, 4000)
                }
            } else {
                setError("Preencha os campos!")
                setTimeout(tirarText, 4000)
            }
        } else {
            setError("As senhas não coencidem!")
            setTimeout(tirarText, 4000)
        }
    }

    const tirarText = () => {
        setError("")
    }

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("usuario logado")
                const user = userCredential.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error)
                Alert.alert(error.message);
            })
    }

    return (
        <SafeAreaView style={styles.container}>
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
                <TextInput style={styles.brinputxt} placeholder='Senha' enterKeyHint='next' returnKeyType='next' secureTextEntry={true} onChangeText={(text) => { setPassword(text) }}>
                </TextInput>
                <AntDesign name="eyeo" size={24} color="black" style={styles.icon} />
            </View>
            <View style={styles.icons}>
                <TextInput style={styles.brinputxt} placeholder='Confirmar senha' enterKeyHint='send' returnKeyType='send' secureTextEntry={true} onChangeText={(text) => { setConfirmPassword(text) }}>
                </TextInput>
                <AntDesign name="eyeo" size={24} color="black" style={styles.icon} />
            </View>
            <Text style={styles.error}>
                {error}
            </Text>
            <TouchableOpacity style={styles.brtt} onPress={handleCreateAccount}>
                <Text style={styles.brtxt}>REGISTRAR</Text>
            </TouchableOpacity>


            <StatusBar style="auto" />
        </SafeAreaView>
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

    error: {
        color: 'red',
        marginTop: '1%'
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

});