

import { createNativeStackNavigator } from '@react-navigation/native-stack';




import { Dashboard } from '../pages/Dasboard';
import { Home } from '../pages/Home'

const {Navigator, Screen} = createNativeStackNavigator();
export const Approutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="Home" component={Home} />
    <Screen name="Dashboard" component={Dashboard} />
  </Navigator>
  )
}

