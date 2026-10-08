import { useLocalSearchParams, useRouter } from "expo-router";
import { ArrowLeft, Save } from 'lucide-react-native';
import { Pressable, StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react';
import TextEditor from '../../components/TextEditor';
import {useNotes} from '../../services/useSave'

const Create = () => {
    const router = useRouter();
    const { id } = useLocalSearchParams<{ id?: string }>();
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    const {addNote, updateNote, notes} = useNotes();
    const editingNote = id ? notes.find((n) => n.id === id) : undefined;
    const isUpdate = Boolean(id && editingNote);
    const prefilledRef = React.useRef(false);

    // Prefill the form once when the note to update becomes available
    React.useEffect(() => {
        if (editingNote && !prefilledRef.current) {
            prefilledRef.current = true;
            setTitle(editingNote.title);
            setContent(editingNote.body);
        }
    }, [editingNote]);

    const handleSave = () => {
        if (isUpdate && id) {
            updateNote(id, { title, body: content });
        } else {
            addNote({ title, body: content });
        }
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