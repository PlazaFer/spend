import { View, Text, SafeAreaView } from "react-native"


export const Home = () => {

    return (
        <SafeAreaView>
            <View className="h-full bg-red justify-center items-center"> 
            <Text className="text-lightGreen text-xs">Home Screen</Text> 
        </View>
        </SafeAreaView>
    );
};