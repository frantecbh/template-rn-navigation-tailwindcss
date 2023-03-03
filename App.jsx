import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';


import { Rotas } from './src/routes';

export default function App() {
  return (
  <NavigationContainer>
      <Rotas />
      <StatusBar style="auto" />
      </NavigationContainer>
  );

}


