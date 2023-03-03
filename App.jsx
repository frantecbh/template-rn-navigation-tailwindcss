
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';


import { Rotas } from './src/routes';

export default function App() {
  return (
  <NavigationContainer>
      <Rotas />
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      </NavigationContainer>
  );

}


