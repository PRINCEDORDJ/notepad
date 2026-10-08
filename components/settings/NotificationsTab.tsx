import { View } from 'react-native';
import { useSettings } from '../../services/useSettings';
import SettingsRow from './SettingsRow';

const NotificationsTab = () => {
  const { settings, updateSetting } = useSettings();

  return (
    <View>
      <SettingsRow
        label="Daily reminder"
        description="Get a nudge to write every day"
        value={settings.dailyReminder}
        onValueChange={(value) => updateSetting('dailyReminder', value)}
      />
      <SettingsRow
        label="Product updates"
        description="News about new notepad features"
        value={settings.productUpdates}
        onValueChange={(value) => updateSetting('productUpdates', value)}
      />
    </View>
  );
};

export default NotificationsTab;
