import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import { Home, PlusIcon, Settings } from 'lucide-react-native'
import type { TabProps } from "../../types/types";


export const TabNav = ({ focused, title, icon }: TabProps  ) => {
    if (focused) {
        return (
            <View className="flex-row bg-slate-500 rounded-full w-[112px] h-[60px] mt-6 items-center justify-center gap-2">
                <View>{icon}</View>
                <Text className="text-white font-bold text-xl">{title}</Text>
            </View>
        )
    }

    return (
        <View className="h-[60px]  mt-6 items-center justify-center">
            <Text>{icon}</Text>
        </View>
    )
}

export default function TabLayout() {
    return(
        <Tabs screenOptions={{
            tabBarItemStyle: {
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
            },
            tabBarStyle: {
                position: "absolute",
                marginBottom: 20,
                marginHorizontal: 40,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: "transparent",
                height: 60,
                overflow: "hidden",
                alignItems: "center",
                justifyContent: "center",
            },
            tabBarShowLabel: false,
        }}>
            <Tabs.Screen name="index" options={{
                tabBarIcon: ({ focused }) => (
                    <TabNav focused={focused} title="Home" icon={<Home />} />
                ), headerShown: false
            }} />
            <Tabs.Screen name="create" options={{
                tabBarIcon: ({ focused }) => (
                    <TabNav focused={focused} title="Create" icon={<PlusIcon className="outline-2 outline-black" size={24} />} />
                ), headerShown: false
            }} />
            <Tabs.Screen name="settings" options={{
                tabBarIcon: ({ focused }) => (
                    <TabNav focused={focused} title="Settings" icon={<Settings />} />
                ), headerShown: false
            }} />
        </Tabs>
    )
}