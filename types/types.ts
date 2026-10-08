export interface TabProps{
    focused: boolean;
    title: string;
    icon: React.ReactNode;
}


export interface Note  { id: string; title: string; body: string; updatedAt: number };

export type NoteContextType = {
  notes: Note[];
  loading: boolean;
  addNote: (n: Pick<Note, "title" | "body">) => void;
  updateNote: (id: string, n: Pick<Note, "title" | "body">) => void;
  deleteNote: (id: string) => void;
};

export interface Settings {
  confirmDelete: boolean;
  showPreviews: boolean;
  dailyReminder: boolean;
  productUpdates: boolean;
  displayName: string;
  email: string;
}

export type SettingsContextType = {
  settings: Settings;
  loading: boolean;
  updateSetting: <K extends keyof Settings>(key: K, value: Settings[K]) => void;
};

export interface AlertCardProps{
  label: string
  onConfirm: () => void
  onClose: ()=>void
}