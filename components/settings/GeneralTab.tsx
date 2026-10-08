import Constants from 'expo-constants';
import { Text, View } from 'react-native';
import { useSettings } from '../../services/useSettings';
import SettingsRow from './SettingsRow';

const GeneralTab = () => {
  const { settings, updateSetting } = useSettings();

  return (
    <View>
      <SettingsRow
        label="Confirm before delete"
        description="Ask before deleting a note"
        value={settings.confirmDelete}
        onValueChange={(value) => updateSetting('confirmDelete', value)}
      />
      <SettingsRow
        label="Show note previews"
        description="Display the note body on cards"
        value={settings.showPreviews}
        onValueChange={(value) => updateSetting('showPreviews', value)}
      />
      <SettingsRow
        label="App version"
        right={<Text className="text-gray-500 text-base">{Constants.expoConfig?.version ?? '1.0.0'}</Text>}
      />
    </View>
  );
};

export default GeneralTab;
