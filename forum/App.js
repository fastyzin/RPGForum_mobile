import Welcome from './Abas/welcome.js'
import Login from './Abas/login.js';
import Register from './Abas/register.js';
import ContaCriada from './Abas/contaCriada.js';
import News from './Abas/News.js';
import EditProfile from './Abas/EditProfile.js';
import FullNews from './Abas/FullNews.js';
import AddNews from './Abas/AddNews.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='welcome'>
        <Stack.Screen name='welcome' component={Welcome} />
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name='register' component={Register} />
        <Stack.Screen name='contaCriada' component={ContaCriada} />
        <Stack.Screen name='index' component={News}/>
        <Stack.Screen name='edit' component={EditProfile}/>
        <Stack.Screen name='full' component={FullNews}/>
        <Stack.Screen name='AddNews' component={AddNews}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


