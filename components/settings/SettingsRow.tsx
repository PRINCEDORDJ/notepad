import { ReactNode } from 'react';
import { Switch, Text, View } from 'react-native';

type SettingsRowProps = {
  label: string;
  description?: string;
  value?: boolean;
  onValueChange?: (value: boolean) => void;
  right?: ReactNode;
};

const SettingsRow = ({ label, description, value, onValueChange, right }: SettingsRowProps) => {
  return (
    <View className="flex-row items-center justify-between gap-4 py-3 border-b border-slate-200">
      <View className="flex-1 pr-2">
        <Text className="text-base font-semibold text-black">{label}</Text>
        {description ? (
          <Text className="text-sm text-gray-500 mt-0.5">{description}</Text>
        ) : null}
      </View>
      {value !== undefined && onValueChange ? (
        <Switch value={value} onValueChange={onValueChange} trackColor={{ true: '#64748b' }} />
      ) : (
        right
      )}
    </View>
  );
};

export default SettingsRow;
