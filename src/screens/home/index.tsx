import { View, Text, SafeAreaView } from "react-native"


export const HomeScreen = () => {

    return (
        <SafeAreaView>
            <View className="h-full bg-red-400 justify-center items-center">
            <Text className="text-white">Home Screen</Text>
        </View>
        </SafeAreaView>
    )
}