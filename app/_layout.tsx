import { Stack } from "expo-router";
import './globals.css'
import { SafeAreaProvider } from "react-native-safe-area-context";  
import {NoteProvider} from '../services/useSave'
import { SettingsProvider } from '../services/useSettings'

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <NoteProvider>
        <SettingsProvider>
          <Stack screenOptions={{ headerShown: false }} />
        </SettingsProvider>
      </NoteProvider>
    </SafeAreaProvider>
  );
}
