import { Modal, Text, TouchableOpacity, View } from 'react-native'
import { X, Trash } from 'lucide-react-native'
import type { AlertCardProps } from '../types/types'

const AlertCard = ({ label, onConfirm, onClose }: AlertCardProps) => {

  return (
    <Modal visible transparent animationType='fade' statusBarTranslucent onRequestClose={onClose}>
      <View className='flex-1 bg-black/40 items-center justify-center px-5'>
        <View className='bg-gray-300 p-5 rounded-xl w-[320px]'>
          <View className='items-center justify-center py-4'>
            <Text className='text-center'>Are you sure you want to delete {label}</Text>
          </View>
          <View className='flex-row items-center justify-center w-full gap-4'>
            <TouchableOpacity onPress={onClose} className='flex-row items-center justify-center gap-2 bg-slate-500/50 w-[124px] h-[47px] rounded-xl'>
              <X size={24} color={'white'} />
              <Text className='text-white font-bold text-xl'>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onConfirm} className='flex-row items-center justify-center gap-2 bg-red-500 w-[124px] h-[47px] rounded-xl'>
              <Trash size={24} color={'white'} />
              <Text className='text-white font-bold text-xl'>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default AlertCard
