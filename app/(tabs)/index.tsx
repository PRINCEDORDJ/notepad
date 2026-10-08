import { View, Text, Pressable, FlatList } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { PlusIcon } from 'lucide-react-native'
import {useRouter} from "expo-router";
import { useNotes } from '../../services/useSave';
import NotesCard from '../../components/NotesCard';


const Index = () => {
  const router = useRouter();
  const {notes, loading} = useNotes();

  return (
    <SafeAreaView>
      <View>
        <View className="flex-row justify-between items-center px-4">
          <Text className="flex items-center justify-center text-3xl font-bold mt-2 inset-x-0 mx-auto">NOTEPAD</Text>
          <Pressable onPress={() => router.push('/create')} >
          <View className="border rounded-full">
            <PlusIcon size={24} className="text-black" />
            </View>
          </Pressable>
</View>
        <View className="px-4 mt-4 w-full">
          {notes.length === 0 && !loading ? (
            <View className="flex items-center justify-center mt-20">
              <Text className="text-gray-500 text-lg">No notes found. Create a new note!</Text>
            </View>
          ): (
            <FlatList data={ notes} renderItem={({ item }) => (
              <NotesCard {...item} />
            )} keyExtractor={(item) => item.id} numColumns={2} />
          )}
        </View>
        
        
      </View>
    </SafeAreaView>
  )
}

export default Index