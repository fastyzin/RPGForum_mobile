import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';

export default function Welcome({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.img} source={require('../assets/logo.png')} />
      <TouchableOpacity style={styles.brtt} onPress={() => navigation.navigate('login')}>
        <Text style={styles.brtxt}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.brtt} onPress={() => navigation.navigate('register')}>
        <Text style={styles.brtxt}>CRIAR CONTA</Text>
      </TouchableOpacity>
      <View style={styles.texto}>
        <Text styke={styles.title}>
          DESENVOLVEDORES
        </Text>
        <Text>
          GUSTAVO CORREA DA BOIT
        </Text>
        <Text>
          VITOR MUNERETTO TINELLI
        </Text>
      </View>
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
    width: 390,
    height: 270,
    marginBottom: '5%',
    marginTop: '35%',
    marginBottom: '10%',
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
  brtxt: {
    color: '#F1FFFA',
    fontSize: 27,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },
  texto: {
    marginTop: '25%',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
});
