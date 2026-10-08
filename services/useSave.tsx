import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import type { Note, NoteContextType } from "../types/types";




const KEY = "notes:v1";
const NoteContext = createContext<NoteContextType | null>(null);

export function NoteProvider({ children }: { children: ReactNode }) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);

  // Load once on app start
  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(KEY);
        if (raw) setNotes(JSON.parse(raw));
      } catch (e) {
        console.warn("Failed to load notes", e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // Save whenever notes change (but not before the first load finishes)
  useEffect(() => {
    if (loading) return;
    AsyncStorage.setItem(KEY, JSON.stringify(notes)).catch((e) =>
      console.warn("Failed to save notes", e)
    );
  }, [notes, loading]);

  const addNote: NoteContextType["addNote"] = (n) =>
    setNotes((prev) => [
      { ...n, id: Date.now().toString(), updatedAt: Date.now() },
      ...prev,
    ]);

  const updateNote: NoteContextType["updateNote"] = (id, n) =>
    setNotes((prev) =>
      prev.map((x) => (x.id === id ? { ...x, ...n, updatedAt: Date.now() } : x))
    );

  const deleteNote: NoteContextType["deleteNote"] = (id) =>
    setNotes((prev) => prev.filter((x) => x.id !== id));

  return (
    <NoteContext.Provider value={{ notes, loading, addNote, updateNote, deleteNote }}>
      {children}
    </NoteContext.Provider>
  );
}

export const useNotes = () => {
  const ctx = useContext(NoteContext);
  if (!ctx) throw new Error("useNotes must be used inside NoteProvider");
  return ctx;
};