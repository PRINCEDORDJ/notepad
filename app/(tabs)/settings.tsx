import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GeneralTab from '../../components/settings/GeneralTab';
import AccountTab from '../../components/settings/AccountTab';
import NotificationsTab from '../../components/settings/NotificationsTab';

const TABS = ['General', 'Account', 'Notifications'] as const;
type Tab = (typeof TABS)[number];

const Settings = () => {
  const [tab, setTab] = React.useState<Tab>('General');

  return (
    <SafeAreaView edges={['top']} className="flex-1">
      <View className="px-4">
        <View className="flex-row justify-between items-center">
          <Text className="text-2xl font-bold">Settings</Text>
        </View>

        <View className="flex-row justify-around mt-4 bg-slate-500/50 h-[45px] items-center rounded-full">
          {TABS.map((t) => (
            <Pressable
              key={t}
              onPress={() => setTab(t)}
              className="px-2 py-2 items-center justify-center"
            >
              <Text
                className={`text-xl font-semibold ${
                  tab === t ? 'text-white' : 'text-gray-500'
                }`}
              >
                {t}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      <ScrollView
        className="flex-1 px-4 mt-4"
        contentContainerStyle={{ paddingBottom: 140 }}
        keyboardShouldPersistTaps="handled"
      >
        {tab === 'General' && <GeneralTab />}
        {tab === 'Account' && <AccountTab />}
        {tab === 'Notifications' && <NotificationsTab />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
