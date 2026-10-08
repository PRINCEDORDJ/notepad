import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const TextEditor = ({ placeholder, content, setContent }: { placeholder: string; content: string; setContent: (text: string) => void }) => {
  return (
    <View>
      <TextInput placeholder={placeholder} multiline={true} placeholderTextColor="gray" style={styles.fontStyle} value={content} onChangeText={(text) => setContent(text)} />
    </View>
  )
}

export default TextEditor

const styles = StyleSheet.create({
    fontStyle: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold'
    }
})