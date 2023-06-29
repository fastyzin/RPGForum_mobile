import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';

export default function ContaCriada({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Image style={styles.img} source={require('../assets/correto.webp')} />
            <Text style={styles.txt}>
                Conta criada com sucesso!
            </Text>
        </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1FFFA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 300,
        height: 300,
        marginBottom: 75,
        marginTop: '10%',
    },
    txt: {
        fontSize: 25,
    },

});
