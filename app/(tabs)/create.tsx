import { useRouter } from "expo-router";
import { ArrowLeft, Save } from 'lucide-react-native';
import { Pressable, StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react';
import TextEditor from '../../components/TextEditor';
import {useNotes} from '../../services/useSave'

const Create = () => {
    const router = useRouter();
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    const {addNote} = useNotes();
    const handleSave = () => {
        // Handle save logic here
        console.log('Title:', title);
        console.log('Content:', content);
        addNote({ title, body: content });
        setTitle('')
        setContent('')
        router.back();
    }
   

    return (
        <SafeAreaView>
            <View>
                <View className="flex-row justify-between items-center px-4">
                    <View className="flex-row items-center gap-4">
                        <Pressable onPress={() => router.back()}>
                            <ArrowLeft size={24} className="text-black" />
                        </Pressable>
                        <TextInput placeholder="Title" value={title} onChangeText={(text) => setTitle(text)} placeholderTextColor="gray" style={styles.fontStyle} />
                    </View>
                    <TouchableOpacity onPress={handleSave}>
                        <Save size={24} className="text-black" />
                    </TouchableOpacity>
                </View>
                <View className="px-4 mt-4">
                    <TextEditor placeholder="Type here..." content={content} setContent={setContent} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Create

const styles = StyleSheet.create({
    fontStyle: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold'
    }
})