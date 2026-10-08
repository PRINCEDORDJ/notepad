import { Text, TextInput, View } from 'react-native';
import { useSettings } from '../../services/useSettings';

const AccountTab = () => {
  const { settings, updateSetting } = useSettings();

  const initials =
    settings.displayName
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join('') || '?';

  return (
    <View>
      <View className="items-center py-6">
        <View className="w-20 h-20 rounded-full bg-slate-500 items-center justify-center">
          <Text className="text-white text-2xl font-bold">{initials}</Text>
        </View>
        <Text className="text-lg font-semibold mt-3">
          {settings.displayName.trim() || 'Your profile'}
        </Text>
        <Text className="text-sm text-gray-500">
          {settings.email.trim() || 'No email added'}
        </Text>
      </View>

      <View className="gap-4">
        <View>
          <Text className="text-sm font-semibold text-gray-700 mb-1">Display name</Text>
          <TextInput
            className="border border-slate-200 rounded-lg px-3 py-2 text-base bg-white"
            placeholder="Jane Doe"
            placeholderTextColor="gray"
            value={settings.displayName}
            onChangeText={(value) => updateSetting('displayName', value)}
            autoCapitalize="words"
          />
        </View>

        <View>
          <Text className="text-sm font-semibold text-gray-700 mb-1">Email</Text>
          <TextInput
            className="border border-slate-200 rounded-lg px-3 py-2 text-base bg-white"
            placeholder="jane@example.com"
            placeholderTextColor="gray"
            value={settings.email}
            onChangeText={(value) => updateSetting('email', value)}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
          />
        </View>

        <Text className="text-xs text-gray-500">
          Your profile is stored on this device only.
        </Text>
      </View>
    </View>
  );
};

export default AccountTab;
