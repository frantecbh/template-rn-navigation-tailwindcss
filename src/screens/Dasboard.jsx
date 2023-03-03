import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';

export function Dashboard() {
  const navigation = useNavigation()

  return (
    <View className="flex-1 items-center justify-center bg-slate-300 px-4" >
       <Text className="text-zinc-800" >Pagina Home!</Text>
       <TouchableOpacity className="bg-blue-600 mt-4 w-full py-4 items-center"
      onPress={() => navigation.goBack()}>
        <Text className="text-white font-semibold text-base" >Go to Home</Text>
      </TouchableOpacity>

    </View>
  );
}

