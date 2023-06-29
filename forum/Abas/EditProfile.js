import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function EditProfile({ navigation }) {

  return (
    <View style={styles.v1}>
      <View style={styles.botoes}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('full')}>
          <TouchableOpacity onPress={() => navigation.navigate('full')} style={styles.arrow}>
            <AntDesign name="back" size={48} color="black" />
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity style={styles.backicon}>
          <TouchableOpacity onPress={() => navigation.navigate('edit')} style={styles.arrow}>
              <AntDesign name="user" size={48} color="black" />
            </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <View style={styles.v2}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EditPhoto')}>
          <Image
            style={styles.mid_avatar}
            source={require("../assets/avatar.png")}>
          </Image>
        </TouchableOpacity>
        <Text style={styles.txt_alterar} > Clique na imagem para alterar </Text>
      </View>

      <View style={styles.infos}>
        <Text> Nome: Marco da Silva</Text>
        <Text> CPF: 121.720.912-23 </Text>
        <Text> E-mail: marcodasilva@gmail.com</Text>
        <Text> Celular: 48 93608-5740</Text>
      </View>
      <View style={styles.edit_button}>
        <TouchableOpacity style={styles.button}>
          <Text> Editar</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text> ⠀⠀⠀⠀⠀⠀</Text>
        <Text> ⠀⠀⠀⠀⠀⠀</Text>
        <Text> ⠀⠀⠀⠀⠀⠀</Text>
        <Text> ⠀⠀⠀⠀⠀⠀</Text>
        <Text> ⠀⠀⠀⠀⠀⠀</Text>
        <Text> ⠀⠀⠀⠀⠀⠀</Text>
        <Text> ⠀⠀⠀⠀⠀⠀</Text>
        <Text> ⠀⠀⠀⠀⠀⠀</Text>
        <Text> ⠀⠀⠀⠀⠀⠀</Text>
        <Text> ⠀⠀⠀⠀⠀⠀</Text>
        <Text> ⠀⠀⠀⠀⠀⠀</Text>
        <Text> ⠀⠀⠀⠀⠀⠀</Text>
      </View>

      <View style={styles.pedro}>
        <TouchableOpacity onPress={() => navigation.navigate('AddNews')}>
          <AntDesign name="addfile" size={40} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('welcome')}>
          <AntDesign name="logout" size={40} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  edit_button: {
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    marginBottom: 15,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10,
    padding: 3,
  },
  logout: {
    width: 64,
    height: 64,
    alignSelf: 'center',
    paddingTop: 50,
  },

  infos: {
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    marginBottom: 15,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10,
    alignSelf: 'center',
    padding: 10,
  },
  txt_alterar: {
    alignSelf: 'center',
    fontSize: 25,
    paddingBottom: 15,
    paddingTop: 12,
  },
  mid_avatar: {
    alignSelf: 'center',
    width: 192,
    height: 192,
    marginTop: 15,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 35,

  },
  v1: {
    flex: 1,
    backgroundColor: '#F1FFFA',
    justifyContent: 'space-between',
    paddingBottom: '5%',
  },
  avatar: {
    width: 64,
    height: 64,

  },
  pedro: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 15,
    marginRight: 15,
  }


}
);