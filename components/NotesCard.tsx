import { Edit, EllipsisVertical, Trash2Icon } from 'lucide-react-native'
import { useState } from 'react'
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNotes } from '../services/useSave'
import type { Note } from '../types/types'
import AlertCard from './AlertCard'


const NotesCard = ({ title, body, id }: Note) => {
    const { deleteNote } = useNotes()
    const [show, setShow] = useState(false)
    const [confirm, setConfirm] = useState(false)

    const handleDelete = () => {
        setShow(false)
        setConfirm(true)
    }

    const handleConfirm = () => {
        deleteNote(id)
        setConfirm(false)
    }


    return (
        <View className=" flex-1 w-full">
            <TouchableOpacity className="bg-slate-500/50 rounded-lg p-4 mb-4 h-[240px]">
                <View style={styles.noteCard}>
                    <Text className="text-2xl font-bold">{title}</Text>
                </View>
                <Text className="text-gray-700 mt-2" numberOfLines={3}>
                    {body}
                </Text>

                <Pressable onPress={() => setShow(s => !s)} className='absolute top-5 right-2'>
                    <EllipsisVertical size={15} />
                </Pressable>
            </TouchableOpacity>


            {show && (
                <View className='bg-white absolute w-[112px] right-0 top-10 h-20 flex-col gap-3 rounded-xl p-3'>
                    <Pressable className='flex-row items-center' onPress={handleDelete}>
                        <Trash2Icon size={15} color={'red'} />
                        <Text className='text-red-500'>Delete</Text>
                    </Pressable>
                    <Pressable className='flex-row items-center'>
                        <Edit size={15} />
                        <Text>Edit</Text>
                    </Pressable>
                </View>
            )}


            {confirm && (
                <AlertCard
                    label={title}
                    onConfirm={handleConfirm}
                    onClose={() => setConfirm(false)} />
            )}
        </View>
    )
}

export default NotesCard

const styles = StyleSheet.create({
    noteCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    }
})